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

//TO DO
