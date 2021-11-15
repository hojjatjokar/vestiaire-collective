import React from 'react';
import Product from '../types/Product';
import IPrice from '../types/Price';
import './List.css'

const Price = ({ price :{ price, reducedPrice} }: {
  price: IPrice
} ) => { 
  
  if(reducedPrice) {
    return (
      <>
        <del>{price}</del>
        {' '}
        <ins>{reducedPrice}</ins>
      </>
    );
  }

  return (
    <span>{price}</span>
  );
};

function List({ products }: {products: Product[]}) {
  const elapsedTime = (time: string) => {
    const then = new Date(time)
    const now = new Date();
    const elapsed = now.getTime() - then.getTime();
    let timeDiff = elapsed / 1000;

    const seconds = Math.floor(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    let minutes = Math.floor(timeDiff % 60);
    timeDiff = Math.floor(timeDiff / 60);
    const hours = Math.floor(timeDiff % 24);
    timeDiff = Math.floor(timeDiff / 24);
    const days = Math.floor(timeDiff % 7);
    timeDiff = Math.floor(timeDiff / 7);
    const weeks = Math.floor(timeDiff);
    timeDiff = Math.floor(timeDiff / 7);
    const months = Math.floor(timeDiff % 12);
    timeDiff = Math.floor(timeDiff / 12);
    const years = Math.floor(timeDiff);

    if(years > 0) {
      return `${years} years ago`;
    }

    if(months > 0) {
      return `${months} months ago`;
    }

    if(weeks > 0) {
      return `${weeks} weeks ago`;
    }

    if(days > 0) {
      return `${days} days, ${hours} hours and ${minutes} minutes, ${seconds} seconds`;
    }

    return `${hours} hours and ${minutes} minutes, ${seconds} seconds`;
  };
  
  return (
    <main className="list">
      {products.map((product:Product) => (
        <section key={product.id} className="card">
          <h3 className="title">{product.name}</h3>
          <p className="subtitle">{product.brand}</p>
          <Price price={product.price}/>
          <p>
            <time>{elapsedTime(product.deposited_on)}</time>
          </p>
          <ul>
            {product.shippable_countries.map((country: string) => (
              <li key={country} className="tag">{country}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default List;
