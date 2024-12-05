
// 4. Analiza wyników ankiety
// Zadanie:
// Napisz funkcję analyzeSurvey(results), która przyjmuje tablicę wyników
// ankiety. Każdy wynik to obiekt z:
// ● name (osoba),
// ● answers (tablica odpowiedzi, gdzie każda odpowiedź ma question i
// answer).
// Funkcja powinna zwrócić:
// 1. Liczbę unikalnych pytań.
// 2. Tablicę osób, które odpowiedziały na wszystkie pytania.
// 3. Obiekt z pytaniami jako kluczami i tablicą unikalnych odpowiedzi dla każdego
// pytania.
// Przykład danych wejściowych:
// const surveyResults = [
// {
// name: "Anna",
// answers: [
// { question: "Favorite color", answer: "Blue" },
// { question: "Favorite food", answer: "Pizza" }
// ]
// },
// {
// name: "John",
// answers: [
// { question: "Favorite color", answer: "Green" },
// { question: "Favorite food", answer: "Pizza" }
// ]
// },

// {
// name: "Kate",
// answers: [
// { question: "Favorite color", answer: "Blue" }
// ]
// }
// ];

// Oczekiwany wynik:
// {
// uniqueQuestions: 2,
// allAnswered: ["Anna", "John"],
// answersSummary: {
// "Favorite color": ["Blue", "Green"],
// "Favorite food": ["Pizza"]
// }
// }

// 5. Generator raportu pogodowego
// Opis:
// Napisz funkcję generateWeatherReport(weatherData), która generuje raport
// pogodowy na podstawie danych wejściowych.
// ● weatherData to tablica obiektów, gdzie każdy obiekt zawiera:
// ○ city (nazwa miasta),
// ○ temperature (temperatura w stopniach Celsjusza),
// ○ humidity (wilgotność w procentach),
// ○ windSpeed (prędkość wiatru w km/h).

// Funkcjonalności:
// 1. Znajdź miasto z najwyższą i najniższą temperaturą.
// 2. Policz średnią wilgotność i prędkość wiatru dla wszystkich miast.
// 3. Posortuj dane według temperatury rosnąco.

// Przykład danych wejściowych:
// const weatherData = [
// { city: "Warsaw", temperature: 10, humidity: 80, windSpeed:
// 15 },
// { city: "Krakow", temperature: 15, humidity: 70, windSpeed:
// 10 },
// { city: "Gdansk", temperature: 5, humidity: 90, windSpeed:
// 20 }
// ];

// Oczekiwany wynik:
// {
// highestTemperature: "Krakow",
// lowestTemperature: "Gdansk",
// averageHumidity: 80,
// averageWindSpeed: 15,
// sortedByTemperature: [
// { city: "Gdansk", ... },
// { city: "Warsaw", ... },
// { city: "Krakow", ... }
// ]
// }

// 6. Analiza danych o sprzedaży
// Opis:
// Stwórz funkcję analyzeSalesData(salesData, metric), która analizuje dane
// sprzedażowe i zwraca wynik w zależności od wybranego metryki
// ("totalRevenue", "bestSeller", "lowStock", "categorySummary").
// ● salesData – tablica obiektów z polami:
// ○ productName,
// ○ category,
// ○ price,
// ○ unitsSold,
// ○ stock.

// Funkcjonalności:
// 1. "totalRevenue" – Oblicza całkowity przychód (cena × liczba sprzedanych
// jednostek).
// 2. "bestSeller" – Zwraca nazwę produktu z najwyższą liczbą sprzedanych
// jednostek.
// 3. "lowStock" – Zwraca produkty, których stock jest mniejszy niż 10.
// 4. "categorySummary" – Zwraca obiekt z podsumowaniem sprzedaży według
// kategorii.
// Przykład danych wejściowych:
// const salesData = [
// { productName: "Laptop", category: "Electronics", price:
// 3000, unitsSold: 20, stock: 5 },
// { productName: "Headphones", category: "Electronics", price:
// 150, unitsSold: 50, stock: 30 },
// { productName: "Book", category: "Books", price: 50,
// unitsSold: 100, stock: 200 }
// ];

// Oczekiwany wynik dla "totalRevenue":
// 45000
