import { manageWarehouseProducts } from "./manageWarehouseProducts";
describe("manageWarehouseProducts", () => {
  const products = [
    { name: "Phone", price: 2000, stock: 3 },
    { name: "Laptop", price: 4500, stock: 0 },
    { name: "Headphones", price: 300, stock: 12 },
    { name: "Keyboard", price: 150, stock: 1 },
  ];

  it("returns products", () => {
    const expected = {
      transformedProducts: [
        { name: "Phone", discountedPrice: 1800, stock: 3 },
        { name: "Headphones", discountedPrice: 270, stock: 12 },
        { name: "Keyboard", discountedPrice: 135, stock: 1 },
      ],
      summary: "Phone (1800), Headphones (270), Keyboard (135)",
      allBelowThreshold: true,
    };
    expect(manageWarehouseProducts(products)).toEqual(expected);
  });
});
