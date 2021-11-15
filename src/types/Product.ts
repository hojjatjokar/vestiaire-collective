import Price from './Price';

interface Product {
  name: string;
  brand: string;
  id: number;
  deposited_on: string;
  //price: Price;
  price: {
    currency: string;
    price: string;
    price_in_cents: number;
    reducedPrice?: string;
  },
  shippable_countries: string[];
}

export default Product;
