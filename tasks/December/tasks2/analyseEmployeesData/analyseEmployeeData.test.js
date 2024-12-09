import { analyseEmployeesData } from "./analyseEmployeeData";

describe("analyseEmployeeData", () => {
  const employees1 = [
    { name: "Anna", position: "Developer", salary: 6000, isActive: true },
    { name: "John", position: "Manager", salary: 8000, isActive: false },
    { name: "Kate", position: "Designer", salary: 5000, isActive: true },
    { name: "Tom", position: "Tester", salary: 4000, isActive: true },
  ];

  const employees2 = [
    { name: "John", position: "Manager", salary: 8000, isActive: false },
    { name: "Kate", position: "Designer", salary: 5000, isActive: true },
    { name: "Ivonne", position: "Tester", salary: 2000, isActive: true },
  ];
  it("should return info about all employees", () => {
    expect(analyseEmployeesData(employees1)).toEqual({
      activeEmployees: 3,
      totalSalaries: 23000,
      highEarners: ["Anna", "John", "Kate"],
    });
    expect(analyseEmployeesData(employees2)).toEqual({
      activeEmployees: 2,
      highEarners: ["John", "Kate"],
      totalSalaries: 15000,
    });
  });
});
