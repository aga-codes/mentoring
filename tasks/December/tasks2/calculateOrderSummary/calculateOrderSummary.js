// 1. Analiza zamówień w sklepie internetowym
// Zadanie:
// Stwórz funkcję calculateOrderSummary(orders), która przyjmuje tablicę
// obiektów reprezentujących zamówienia. Każde zamówienie zawiera:
// ● id (numer zamówienia),
// ● items (tablica przedmiotów, gdzie każdy przedmiot ma name, price i
// quantity),
// ● discount (procent zniżki na całe zamówienie).
// Funkcja powinna zwracać obiekt z:
// 1. Liczbą wszystkich zamówień.
// 2. Suma wszystkich pozycji w zamówieniach.
// 3. Łącznym kosztem zamówień po zniżkach.
/*

Przykład danych wejściowych:
const orders = [
{
id: 1,
items: [
{ name: "Laptop", price: 3000, quantity: 1 },
{ name: "Myszka", price: 150, quantity: 2 }
],
discount: 10 // procent
},
{
id: 2,
items: [
{ name: "Monitor", price: 1000, quantity: 1 },
{ name: "Klawiatura", price: 200, quantity: 1 }
],
discount: 5
}
];

*/
// Oczekiwany wynik:
// {
// totalOrders: 2,
// totalItems: 5,
// totalCost: 3825
// }

// Oczekiwany wynik:
// {
// totalOrders: 2,
// totalItems: 5,
// totalCost: 3825 //INCORRECT EXPECTED RESULT -> TOTAL PRICE = 4350, 5% = 217.5, 15% = 652.5
//

export const calculateOrderSummary = (order) => {
  const totalNumberOfOrders = order.length;
  let allOrderedItems = 0;
  let totalPrice = 0; //for the entire thing

  order.forEach((singleOrder) => {
    let orderDiscount = singleOrder.discount;
    singleOrder.items.forEach((orderItems) => {
      allOrderedItems += orderItems.quantity;

      let singleOrderPrice = 0;

      singleOrderPrice += orderItems.price * orderItems.quantity;
      singleOrderPrice =
        singleOrderPrice - (singleOrderPrice * orderDiscount) / 100;

      totalPrice += singleOrderPrice;
      singleOrderPrice = 0;
    });
  });

  return {
    totalOrders: totalNumberOfOrders,
    totalItems: allOrderedItems,
    totalCost: totalPrice,
  };
};
