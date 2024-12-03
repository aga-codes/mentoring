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

const calculateOrderSummary = (order) => {
	let totalItemsOrdered = 0;
	let sumOfTheOrders = 0;

	const totalNumberOfOrders = order.length;

	// Oczekiwany wynik:
	// {
	// totalOrders: 2,
	// totalItems: 5,
	// totalCost: 3825
	//

	return {
		totalOrders: totalNumberOfOrders,
		totalItems: totalItemsOrdered,
		totalCost: sumOfTheOrders,
	};
};

// calculateOrderSummary([
// 	{
// 		id: 1,
// 		items: [
// 			{name: "Laptop", price: 3000, quantity: 1},
// 			{name: "Myszka", price: 150, quantity: 2},
// 		],
// 		discount: 10, // procent
// 	},
// 	{
// 		id: 2,
// 		items: [
// 			{name: "Monitor", price: 1000, quantity: 1},
// 			{name: "Klawiatura", price: 200, quantity: 1},
// 		],
// 		discount: 5,
// 	},
// ]);
