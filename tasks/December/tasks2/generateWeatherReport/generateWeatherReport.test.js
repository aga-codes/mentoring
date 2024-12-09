import { generateWeatherReport } from "./generateWeatherReport";

describe("generateWeatherReport", () => {
  const weatherData = [
    { city: "Warsaw", temperature: 10, humidity: 80, windSpeed: 15 },
    { city: "Krakow", temperature: 15, humidity: 70, windSpeed: 10 },
    { city: "Gdansk", temperature: 5, humidity: 90, windSpeed: 20 },
  ];
  it("should generate weather report for provided data", () => {
    expect(generateWeatherReport(weatherData)).toEqual({
      highestTemperature: "Krakow",
      lowestTemperature: "Gdansk",
      averageHumidity: 80,
      averageWindSpeed: 15,
      sortedByTemperature: [
        {
          city: "Gdansk",
          humidity: 90,
          temperature: 5,
          windSpeed: 20,
        },
        {
          city: "Warsaw",
          humidity: 80,
          temperature: 10,
          windSpeed: 15,
        },
        {
          city: "Krakow",
          humidity: 70,
          temperature: 15,
          windSpeed: 10,
        },
      ],
    });
  });
});
