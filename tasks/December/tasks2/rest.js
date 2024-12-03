// 2. Analiza danych o pracownikach
// Zadanie:
// Stwórz funkcję analyzeEmployeesData(employees), która przyjmuje tablicę
// obiektów reprezentujących pracowników. Każdy obiekt zawiera:
// ● name (imię),
// ● position (stanowisko),
// ● salary (wynagrodzenie),
// ● isActive (czy pracownik jest aktywny).
// Funkcja powinna zwrócić obiekt z:
// 1. Liczbą aktywnych pracowników.
// 2. Łącznym wynagrodzeniem wszystkich pracowników.
// 3. Tablicą nazwisk pracowników z wynagrodzeniem powyżej podanego progu
// (np. salary > 5000).
// Przykład danych wejściowych:
// const employees = [
// { name: "Anna", position: "Developer", salary: 6000,
// isActive: true },
// { name: "John", position: "Manager", salary: 8000, isActive:
// false },
// { name: "Kate", position: "Designer", salary: 5000,
// isActive: true },
// { name: "Tom", position: "Tester", salary: 4000, isActive:
// true }
// ];

// Oczekiwany wynik (dla progu 5000):
// {
// activeEmployees: 3,
// totalSalaries: 23000,
// highEarners: ["Anna", "John"]
// }

// 3. Zarządzanie biblioteką książek
// Zadanie:
// Napisz funkcję manageLibrary(books, action, payload), która zarządza
// biblioteką. Funkcja przyjmuje:
// 1. books – tablicę obiektów, gdzie każdy obiekt zawiera:
// ○ title (tytuł książki),
// ○ author (autor),
// ○ isAvailable (czy książka jest dostępna).
// 2. action – typ operacji do wykonania:
// ○ "add" – dodaje nową książkę (dane w payload).
// ○ "remove" – usuwa książkę na podstawie tytułu (payload zawiera
// title).
// ○ "borrow" – ustawia isAvailable na false dla podanej książki
// (payload zawiera title).
// ○ "return" – ustawia isAvailable na true dla podanej książki
// (payload zawiera title).

// Funkcja powinna zwracać zaktualizowaną tablicę książek.
// Przykład danych wejściowych:
// const books = [
// { title: "1984", author: "George Orwell", isAvailable: true
// },
// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true }
// ];
// // Dodawanie książki

// manageLibrary(books, "add", { title: "Dune", author: "Frank
// Herbert", isAvailable: true });
// // Wypożyczanie książki
// manageLibrary(books, "borrow", { title: "1984" });
// // Zwracanie książki
// manageLibrary(books, "return", { title: "1984" });

// Oczekiwane wyniki:
// 1. Po dodaniu:
// [
// { title: "1984", author: "George Orwell", isAvailable: true
// },
// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true },
// { title: "Dune", author: "Frank Herbert", isAvailable: true
// }
// ]

// 2. Po wypożyczeniu:
// [
// { title: "1984", author: "George Orwell", isAvailable: false
// },
// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true },
// { title: "Dune", author: "Frank Herbert", isAvailable: true
// }
// ]

// 3. Po zwróceniu:
// [
// { title: "1984", author: "George Orwell", isAvailable: true
// },

// { title: "Brave New World", author: "Aldous Huxley",
// isAvailable: true },
// { title: "Dune", author: "Frank Herbert", isAvailable: true
// }
// ]

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
