import { employeeDataProcessing } from "./employeeDataProcessing";

describe("employeeDataProcessing", () => {
  it("processes employee data", () => {
    const employees = {
      John: ["Football", "Chess"],
      Anna: ["Dancing", "Chess", "Cycling"],
      Peter: ["Running"],
      Zoe: ["Dancing", "Football"],
      Camille: ["Chess", "Running"],
    };
    const expected = {
      hobbies: {
        Chess: 3,
        Cycling: 1,
        Dancing: 2,
        Football: 2,
        Running: 2,
      },
      hobbyForAll: false,
      mostPopularHobby: { name: "Chess", count: 3 },
    };
    expect(employeeDataProcessing(employees)).toEqual(expected);
  });
});
