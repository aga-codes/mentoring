// Task 2: Customer Order Analysis
// Story: You work at a courier company. You have a list of orders with information on whether
// they’ve been delivered and which customer placed them. You want to prepare a summary
// report to identify patterns and ensure customer satisfaction.
// Input data:
const orders = [
  {
    id: 1,
    customer: { name: "Anna", city: "Warsaw" },
    delivered: true,
    items: ["Notebook", "Pen"],
  },
  {
    id: 2,
    customer: { name: "Paul", city: "Krakow" },
    delivered: false,
    items: ["Laptop"],
  },
  {
    id: 3,
    customer: { name: "Anna", city: "Warsaw" },
    delivered: true,
    items: ["Keyboard"],
  },
  {
    id: 4,
    customer: { name: "Zofia", city: "Gdansk" },
    delivered: false,
    items: ["Monitor", "Mouse"],
  },
];

// Goals:
// 1. Determine if there is any undelivered order from "Warsaw."
// 2. Verify if all delivered orders contain at least one item.
// 3. Create a summary object where:
// ○ Keys are customer names.
// ○ Values are arrays of items from their delivered orders (no duplicates, if any
// item appears multiple times).

// 4. From that summary object, generate a sorted list of customers by their name and the
// total count of delivered items they received.
// 5. Return an object that includes:
// ○ The boolean result from step 1.
// ○ The boolean result from step 2.
// ○ The customer summary object.
// ○ The sorted list of customers (array of objects with name and count
// properties).

// Example result:
// {
// undeliveredFromWarsaw: false,
// allDeliveredHaveItems: true,
// customerSummary: {
// "Anna": ["Notebook", "Pen", "Keyboard"]
// },
// sortedCustomers: [
// { name: "Anna", count: 3 }
// ]
// }

// const orders = [
//   {
//     id: 1,
//     customer: { name: "Anna", city: "Warsaw" },
//     delivered: true,
//     items: ["Notebook", "Pen"],
//   },
//   {
//     id: 2,
//     customer: { name: "Paul", city: "Krakow" },
//     delivered: false,
//     items: ["Laptop"],
//   },
//   {
//     id: 3,
//     customer: { name: "Anna", city: "Warsaw" },
//     delivered: true,
//     items: ["Keyboard"],
//   },
//   {
//     id: 4,
//     customer: { name: "Zofia", city: "Gdansk" },
//     delivered: false,
//     items: ["Monitor", "Mouse"],
//   },
// ];

export const analyseCustomerOrder = (orders) => {
  const checkIfWarsawOrdersUndelivered = () => {
    const ordersFromWarsaw = orders.filter(
      (order) => order.customer.city === "Warsaw"
    );

    return ordersFromWarsaw.every((order) => !order.delivered);
  };

  const verifyOrders = () => {
    const deliveredItems = orders.filter((order) => order.delivered === true);
    return deliveredItems.every((order) => order.items.length >= 1);
  };

  const getCustomerOrdersSummary = () => {
    const onlyDeliveredOrders = orders.filter((order) => order.delivered);
    const summary = {};

    onlyDeliveredOrders.forEach((order) => {
      const nameOnTheOrder = order.customer.name;
      const orderedItems = order.items;

      if (!summary[nameOnTheOrder]) {
        summary[nameOnTheOrder] = [];
      }

      const itemsWithDuplicates = summary[nameOnTheOrder].concat(orderedItems);
      summary[nameOnTheOrder] = Array.from(new Set(itemsWithDuplicates));
    });
    return summary;
  };

  const getSortedCustomers = () => {
    const sortedOrder = getCustomerOrdersSummary();

    const result = Object.keys(sortedOrder).map((customer) => {
      return {
        name: customer,
        count: sortedOrder[customer].length,
      };
    });

    return result;
  };

  return {
    undeliveredFromWarsaw: checkIfWarsawOrdersUndelivered(),
    allDeliveredHaveItems: verifyOrders(),
    customerSummary: getCustomerOrdersSummary(),
    sortedCustomers: getSortedCustomers(),
  };
};
