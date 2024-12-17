import { analyseCustomerOrder } from "./customerOrderAnalysis";
describe("customerOrderAnalysis", () => {
  it("should analyse customer's order", () => {
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

    const expected = {
      undeliveredFromWarsaw: false,
      allDeliveredHaveItems: true,
      customerSummary: {
        Anna: ["Notebook", "Pen", "Keyboard"],
      },
      sortedCustomers: [{ name: "Anna", count: 3 }],
    };
    expect(analyseCustomerOrder(orders)).toEqual(expected);
  });
});
