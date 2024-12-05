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
// Przykład danych wejściowych:

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

  let totalPrice = 0;
  let totalDiscount = 0;

  order.flat().map((singleOrder) => {
    totalDiscount += singleOrder.discount;

    singleOrder.items.map((orderItems) => {
      (totalPrice += orderItems.price),
        (allOrderedItems += orderItems.quantity);
    });
  });

  const totalPriceAfterDiscounts =
    totalPrice - (totalPrice * totalDiscount) / 100;

  return {
    totalOrders: totalNumberOfOrders,
    totalItems: allOrderedItems,
    totalCost: totalPriceAfterDiscounts,
  };
};
