import { calculateOrderSummary } from "./calculateOrderSummary";

describe("calculateOrderSummary", () => {
  const order1 = [
    {
      id: 1,
      items: [
        { name: "Laptop", price: 3000, quantity: 1 },
        { name: "Myszka", price: 150, quantity: 2 },
      ],
      discount: 10, // procent
    },
    {
      id: 2,
      items: [
        { name: "Monitor", price: 1000, quantity: 1 },
        { name: "Klawiatura", price: 200, quantity: 1 },
      ],
      discount: 5,
    },
  ];

  const order2 = [
    {
      id: 1,
      items: [
        { name: "Laptop", price: 3000, quantity: 1 },
        { name: "Myszka", price: 150, quantity: 2 },
      ],
      discount: 10, // procent
    },
    {
      id: 2,
      items: [
        { name: "Monitor", price: 5000, quantity: 1 },
        { name: "Klawiatura", price: 200, quantity: 1 },
      ],
      discount: 10,
    },
  ];

  const order3 = [
    {
      id: 1,
      items: [
        { name: "Laptop", price: 2000, quantity: 1 },
        { name: "Myszka", price: 10, quantity: 20 },
      ],
      discount: 10, // procent
    },
    {
      id: 2,
      items: [
        { name: "Monitor", price: 5000, quantity: 1 },
        { name: "Klawiatura", price: 200, quantity: 1 },
      ],
      discount: 18,
    },
    {
      id: 3,
      items: [
        { name: "Monitor", price: 5000, quantity: 13 },
        { name: "Klawiatura", price: 200, quantity: 1 },
      ],
      discount: 10,
    },
  ];

  it("should correctly return order summary", () => {
    expect(calculateOrderSummary(order1)).toEqual({
      totalOrders: 2,
      totalItems: 5,
      totalCost: 3697.5,
    });
    expect(calculateOrderSummary(order2)).toEqual({
      totalOrders: 2,
      totalItems: 5,
      totalCost: 6680,
    });
    expect(calculateOrderSummary(order3)).toEqual({
      totalOrders: 3,
      totalItems: 37,
      totalCost: 7694.2,
    });
  });
});
