import { analyseSalesData } from "./analyseSalesData";

describe("analyseSalesData", () => {
  const salesData = [
    {
      productName: "Laptop",
      category: "Electronics",
      price: 3000,
      unitsSold: 20,
      stock: 5,
    },
    {
      productName: "Headphones",
      category: "Electronics",
      price: 150,
      unitsSold: 50,
      stock: 30,
    },
    {
      productName: "Book",
      category: "Books",
      price: 50,
      unitsSold: 100,
      stock: 200,
    },
  ];
  it("gets total revenue", () => {
    expect(analyseSalesData(salesData, "totalRevenue")).toBe(72500);
  });
  it("gets best selling item", () => {
    expect(analyseSalesData(salesData, "bestSeller")).toBe("Book");
  });
  it("gets item with the stock lower than threshold", () => {
    expect(analyseSalesData(salesData, "lowStock")).toEqual([
      {
        category: "Electronics",
        price: 3000,
        productName: "Laptop",
        stock: 5,
        unitsSold: 20,
      },
    ]);
  });
  it("gets summary for category", () => {
    expect(analyseSalesData(salesData, "categorySummary")).toEqual([
      {
        category: "Electronics",
        productNamesInThisCategory: ["Laptop", "Headphones"],
        totalSales: 67500,
        totalUnitsSold: 70,
      },
      {
        category: "Books",
        productNamesInThisCategory: ["Book"],
        totalSales: 5000,
        totalUnitsSold: 100,
      },
    ]);
  });
});
