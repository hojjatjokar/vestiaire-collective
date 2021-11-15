export const calculatePrice = (price: number, discount: number) => {
  // @TODO: check floating point arithmetic
  const discountPrice = centToEuro(calculateDiscount(price, discount))
  

  return discountPrice.toFixed(2);
};

const calculateDiscount = (price: number, discount: number): number => {
  return price * (1 - discount)
}

const centToEuro = (cents: number): number => {
  return cents / 100;
}
