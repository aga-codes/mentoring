// Task 4: Managing Warehouse Products
// Story: Your warehouse stores products along with prices and stock levels. You want to
// display information about available products (stock > 0) with a discount and create a
// summary to help with quick inventory checks.
// Input data
const products = [
  { name: "Phone", price: 2000, stock: 3 },
  { name: "Laptop", price: 4500, stock: 0 },
  { name: "Headphones", price: 300, stock: 12 },
  { name: "Keyboard", price: 150, stock: 1 },
];
// Goals:
// 1. Filter only those products that have stock > 0.
// 2. Apply a 10% discount to their price.
// 3. Create a string listing available products and their discounted prices, separated by
// commas, with the price in parentheses.
// 4. Check if every available product after the discount is priced below a certain threshold
// (e.g., 2000).
// 5. Return an object that includes:
// ○ The array of transformed products (with discounted prices).
// ○ The summary string.
// ○ A boolean indicating if all discounted products are below the chosen
// threshold.

// Example result
// {
// transformedProducts: [
// { name: "Phone", discountedPrice: 1800, stock: 3 },
// { name: "Headphones", discountedPrice: 270, stock: 12 },
// { name: "Keyboard", discountedPrice: 135, stock: 1 }
// ],
// summary: "Phone (1800), Headphones (270), Keyboard (135)",
// allBelowThreshold: true
// }

//TO DO

export const manageWarehouseProducts = (products) => {
  const productsInStock = products.filter((product) => product.stock > 0);

  const getDiscountedProducts = () => {
    const availableProducts = JSON.parse(JSON.stringify(productsInStock));
    availableProducts.forEach((product) => {
      product.discountedPrice = product.price - (product.price * 10) / 100;
      delete product.price;
    });

    return availableProducts;
  };

  const checkIfBelowThreshold = () => {
    const PRICE_THREASHOLD = 2000;
    const allProducts = getDiscountedProducts();

    return allProducts.every(
      (product) => product.discountedPrice < PRICE_THREASHOLD
    );
  };

  const getSummary = () => {
    const allProducts = getDiscountedProducts();

    return allProducts
      .map((product) => `${product.name} (${product.discountedPrice})`)
      .join(", ");
  };

  return {
    transformedProducts: getDiscountedProducts(),
    summary: getSummary(),
    allBelowThreshold: checkIfBelowThreshold(),
  };
};
