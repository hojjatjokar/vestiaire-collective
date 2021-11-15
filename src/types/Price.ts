interface Price {
  currency: string;
  price: string;
  price_in_cents: number;
  reducedPrice?: string;
}

export default Price;
