// Task 1
// You have an array of objects representing products. Each product has name, category,
// and price. Write a function that groups the products by category and then returns an object
// that, for each category, contains the number of products in that category and the average
// price of those products (rounded to two decimal places).
// Input data (example):
// const products = [
// { name: "Banana", category: "Fruits", price: 3.5 },
// { name: "Apple", category: "Fruits", price: 2.0 },
// { name: "Carrot", category: "Vegetables", price: 1.5 },
// { name: "Spinach", category: "Vegetables", price: 2.5 },
// { name: "Orange", category: "Fruits", price: 2.2 }
// ];

// Expected result:
// {
// Fruits: { count: 3, averagePrice: 2.57 },
// Vegetables: { count: 2, averagePrice: 2.00 }
// }

const getProducts = (products) => {
  const getProductsByCategory = products.reduce((result, product) => {
    const { category, price } = product;

    if (!result[category]) {
      result[category] = { count: 0, totalPrice: 0 };
    }

    result[category].count += 1;
    result[category].totalPrice += price;

    return result;
  }, {});

  const categoryData = getProductsByCategory;

  const getSummary = Object.keys(categoryData).reduce((result, category) => {
    const { count, totalPrice } = categoryData[category];

    const categoryAveragePrice = (totalPrice / count).toFixed(2);

    result[category] = {
      count,
      averagePrice: parseFloat(categoryAveragePrice),
    };

    return result;
  }, {});

  return getSummary;
};
