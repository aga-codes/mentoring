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
const weatherData = [
  { city: "Warsaw", temperature: 10, humidity: 80, windSpeed: 15 },
  { city: "Krakow", temperature: 15, humidity: 70, windSpeed: 10 },
  { city: "Gdansk", temperature: 5, humidity: 90, windSpeed: 20 },
];

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

export const generateWeatherReport = (weatherData) => {
  const getHighestTemperature = () => {
    const highestTemperaturePlace = weatherData.reduce(
      (startingTemperature, currentPlace) => {
        return currentPlace.temperature > startingTemperature.temperature
          ? currentPlace
          : startingTemperature;
      },
      weatherData[0]
    );

    return highestTemperaturePlace.city;
  };

  const getLowestTemperature = () => {
    const lowestTemperaturePlace = weatherData.reduce(
      (startingTemperature, currentPlace) => {
        return currentPlace.temperature < startingTemperature.temperature
          ? currentPlace
          : startingTemperature;
      },
      weatherData[0]
    );

    return lowestTemperaturePlace.city;
  };

  const getAverage = (metric) => {
    if (metric === "humidity") {
      const totalHumidity = weatherData.reduce((acc, currentPlace) => {
        return acc + currentPlace.humidity;
      }, 0);

      return totalHumidity / weatherData.length;
    }

    if (metric === "windSpeed") {
    }
    const totalWindSpeed = weatherData.reduce((acc, currentPlace) => {
      return acc + currentPlace.windSpeed;
    }, 0);

    return totalWindSpeed / weatherData.length;
  };

  const getWeatherDataSorted = () => {
    const data = [...weatherData];
    //sort from the lowest to the highest
    const sortedData = data.sort((a, b) => a.temperature - b.temperature);

    return sortedData;
  };

  return {
    highestTemperature: getHighestTemperature(),
    lowestTemperature: getLowestTemperature(),
    averageHumidity: getAverage("humidity"),
    averageWindSpeed: getAverage("windSpeed"),
    sortedByTemperature: getWeatherDataSorted(),
  };
};
