import Product from "../types/Product";

const normalizeProducts = (products: Product[]) => {
  return products.map(product => {
    if (product.brand === 'Louis Vuitton') {
      return {
        ...product,
        brand: product.brand.split('').reverse().join(''),
      }
    }
    return product
  });
}

export default normalizeProducts;
