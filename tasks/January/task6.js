// Task 6
// Description: You have an array of objects representing products. Each object contains:
// ● name: the product name
// ● category: the product category, e.g., "Electronics", "Books", "Clothing"
// ● price: the product price (number)
// ● rating: the product rating (number from 1 to 5)
// Input data (example):
// const products = [
// { name: "Laptop", category: "Electronics", price: 4000, rating:
// 4.5 },
// { name: "Smartphone", category: "Electronics", price: 3000,
// rating: 4.7 },
// { name: "Headphones", category: "Electronics", price: 500, rating:
// 4.2 },
// { name: "T-Shirt", category: "Clothing", price: 50, rating: 3.8 },
// { name: "Jeans", category: "Clothing", price: 120, rating: 4.0 },
// { name: "Jacket", category: "Clothing", price: 300, rating: 4.1 },
// { name: "Cookbook", category: "Books", price: 80, rating: 4.9 },
// { name: "Novel", category: "Books", price: 40, rating: 4.3 }
// ];

// Tasks (stages):

// 1. Grouping by category: Group the products by category. You will get an object
// where the key is the category name and the value is the array of products in that
// category.
// 2. Sorting within categories: In each category, sort the products by price in ascending
// order.
// 3. Calculating the median price in each category: For each category, calculate the
// median price of the products. The median is the middle element of the sorted list; if
// there is an even number of elements, take the average of the two middle elements.
// For example, if "Electronics" has the prices [500, 3000, 4000] after sorting, the
// median is 3000.
// 4. Counting products above a rating threshold: Assume a rating threshold, e.g.,
// 4.0. Count how many products in each category have a rating greater than or equal
// to this threshold.
// 5. Final result: Return an object that, for each category, contains:
// ○ the list of products sorted by price
// ○ the median price
// ○ the number of products with a rating >= 4.0

// Example (shortened):
// {
// Electronics: {
// products: [
// { name: "Headphones", price: 500, rating: 4.2 },
// { name: "Smartphone", price: 3000, rating: 4.7 },
// { name: "Laptop", price: 4000, rating: 4.5 }
// ],
// medianPrice: 3000,
// countHighRating: 3
// },
// Clothing: {
// products: [
// { name: "T-Shirt", price: 50, rating: 3.8 },
// { name: "Jeans", price: 120, rating: 4.0 },

// { name: "Jacket", price: 300, rating: 4.1 }
// ],
// medianPrice: 120,
// countHighRating: 2 // (Jeans and Jacket)
// },
// Books: {
// products: [
// { name: "Novel", price: 40, rating: 4.3 },
// { name: "Cookbook", price: 80, rating: 4.9 }
// ],
// medianPrice: 60, // (average of 40 and 80)
// countHighRating: 2
// }
// }

const products = [
  { name: "Laptop", category: "Electronics", price: 4000, rating: 4.5 },
  { name: "Smartphone", category: "Electronics", price: 3000, rating: 4.7 },
  { name: "Headphones", category: "Electronics", price: 500, rating: 4.2 },
  { name: "T-Shirt", category: "Clothing", price: 50, rating: 3.8 },
  { name: "Jeans", category: "Clothing", price: 120, rating: 4.0 },
  { name: "Jacket", category: "Clothing", price: 300, rating: 4.1 },
  { name: "Cookbook", category: "Books", price: 80, rating: 4.9 },
  { name: "Novel", category: "Books", price: 40, rating: 4.3 },
];

const getProductsInfo = (products) => {
  const groupByCategory = products.reduce((result, product) => {
    const { category, ...productInfo } = product;
    if (!result[product.category]) {
      result[product.category] = [];
    }

    result[product.category].push(productInfo);
    return result;
  }, {});

  const getCategorySummary = Object.keys(groupByCategory).reduce(
    (result, category) => {
      const sortByPrice = groupByCategory[category].sort(
        (a, b) => a.price - b.price
      );
      const getMedianPrice = () => {
        const half = Math.floor(sortByPrice.length / 2);

        if (sortByPrice.length % 2 !== 0) {
          return sortByPrice[half].price;
        }

        const middle1 = sortByPrice[half - 1].price;
        const middle2 = sortByPrice[half].price;
        return (middle1 + middle2) / 2;
      };

      const getHighRating = () => {
        const RATING_THREASHOLD = 4.0;

        const result = groupByCategory[category].filter(
          (product) => product.rating >= RATING_THREASHOLD
        );

        return result.length;
      };

      result[category] = {
        products: sortByPrice,
        medianPrice: getMedianPrice(),
        countHighRating: getHighRating(),
      };

      return result;
    },
    {}
  );

  return getCategorySummary;
};

getProductsInfo(products);
console.log(getProductsInfo(products));
