import React from 'react';
import normalizeProducts from '../utils/product-normalizer';
import Product from '../types/Product';
import './Filter.css';
import {products} from '../products.json';

interface IProps {
  max: number;
  setMax: (max: number) => void;
  brand: string | null;
  filterByBrand: (products: Product[]) => Product[] ;
  setProductsList: (products: Product[]) => void;
}

const Filter = ({ max, setMax, brand, filterByBrand, setProductsList }: IProps) => {
  const [min, setMin] = React.useState(0);
  const [country, setCountry] = React.useState('ALL');
  const [sort, setSort] = React.useState('default');

  const filter = () => {
    const minEuros = min * 100;
    const maxEuros = max * 100;
    let normalizedProducts = normalizeProducts(products);
    
    if(brand){
      normalizedProducts = filterByBrand(normalizedProducts)
    }

    normalizedProducts = normalizedProducts.filter(item => {
      return item.price.price_in_cents >= minEuros && item.price.price_in_cents <= maxEuros && (item.shippable_countries.includes(country) || country === 'ALL')
    });

    if(sort !== 'default'){
      normalizedProducts = normalizedProducts.sort((a, b) => {
        if(sort === 'lowest'){
          return a.price.price_in_cents - b.price.price_in_cents
        } else {
          return b.price.price_in_cents - a.price.price_in_cents
        }
      })
    }

    setProductsList(normalizedProducts);
  }

  return (
    <div className="filter">
      <div className="input-box">
        <label htmlFor="min">
          Min
        </label>
        <input 
          type="text" 
          id="min" 
          name="min"
          value={min} 
          onChange={(v) => setMin(Number(v.target.value))} 
          className="input"
        />

      </div>
      <div className="input-box">
        <label htmlFor="max">
          Max
        </label>
        <input 
          type="text" 
          id="max" 
          name="max"
          value={max} 
          onChange={(v) => setMax(Number(v.target.value))} 
          className="input"
        />
      </div>
      <div className="input-box">
        <label htmlFor="country">
          Country
        </label>
        <select name="country" id="country" onChange={v => setCountry(v.target.value)} className="input">
          <option value="all">All</option>
          <option value="UK">United Kingdom</option>
          <option value="US">United States</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="it">Itlay</option>
        </select>
      </div>
      <div className="input-box">
        <label htmlFor="sort">
          Sort by
        </label>
        <select 
          name="order"
          id="order" 
          onChange={v => setSort(v.target.value)}
          className="input"
        >
          <option value="default">Default</option>
          <option value="lowest">Lowest price</option>
          <option value="highest">Highest price</option>
        </select>
      </div>
      
      <div className="submit-box">
        <button onClick={filter} className="submit">Filter</button>
      </div>
    </div>
  );
}

export default Filter;
