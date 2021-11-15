import React from 'react';
import './App.css';
import {products} from './products.json';
import Product from './types/Product';
import List from './components/List';
import { calculatePrice } from './utils/money';
import { PROMOTION_PERCENTAGE } from './Consonants';
import normalizeProducts from './utils/product-normalizer';
import Filter from './components/Filter';


const getMax = (products: Product[]) => {
  let max = 0;

  products.forEach(product => {
   if(product.price.price_in_cents > max) max = product.price.price_in_cents;
  });

  return max/100;
}

function App() {
  const [productsList, setProductsList] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [max, setMax] = React.useState(0);

  const params = new URLSearchParams(window.location.search)
  let brand = params.get('brand');

  const filterByBrand = (products: Product[], ) => {    
    let filteredProducts = products.filter(product => product.brand === brand);
    filteredProducts = filteredProducts.map(product => {
      const reducedPrice = calculatePrice(product.price.price_in_cents, PROMOTION_PERCENTAGE)

      return ({
        ...product,
        price: {
          ...product.price,
          reducedPrice: `${reducedPrice}${product.price.currency}`
        },
      })
    })
      return filteredProducts;
  }

  React.useEffect(() => {
    const normalizedProducts = normalizeProducts(products);
    const max = getMax(products)
    setMax(max);

    if(brand){
      let filteredProducts = filterByBrand(normalizedProducts)
      setProductsList(filteredProducts);
    } else {
      setProductsList(normalizedProducts);
    }

    setLoading(false);
  }, []);

  

  if(loading) return <div>loading</div>

  return (
    <div className="App">
      <h1 className="heading">
        Vestiaire
      </h1>
      <Filter max={max} setMax={setMax} brand={brand} filterByBrand={filterByBrand} setProductsList={setProductsList}  />
      <List products={productsList} />
    </div>
  );
}

export default App;
