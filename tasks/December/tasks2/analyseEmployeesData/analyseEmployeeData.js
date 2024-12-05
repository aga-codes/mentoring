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

export const analyseEmployeesData = (employees) => {
  const HIGH_INCOME_THREASHOLD = 5000;

  const allHighEarners = [];
  let totalActiveEmployees = 0;
  let totalSalaries = 0;

  employees.map((employee) => {
    totalSalaries += employee.salary;

    if (employee.isActive === true) {
      totalActiveEmployees += 1;
    }

    if (employee.salary >= HIGH_INCOME_THREASHOLD) {
      allHighEarners.push(employee.name);
    }
  });

  return {
    activeEmployees: totalActiveEmployees,
    totalSalaries: totalSalaries,
    highEarners: allHighEarners,
  };
};
