// Task 5
// Description: You have an array of objects, each representing an employee in a company.
// Each object contains:
// ● id: the employee’s unique ID
// ● name: the employee’s name
// ● department: the company department, e.g., "Sales", "IT", "HR"
// ● monthlySalary: the monthly salary (number)
// ● role: the employee’s role, e.g., "Manager", "Developer", "Recruiter"
// Input data (example):
// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     department: "IT",
//     monthlySalary: 7000,
//     role: "Developer",
//   },
//   {
//     id: 2,
//     name: "Bob",
//     department: "Sales",
//     monthlySalary: 4000,
//     role: "Salesperson",
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     department: "IT",
//     monthlySalary: 12000,
//     role: "Manager",
//   },
//   {
//     id: 4,
//     name: "Diana",
//     department: "HR",
//     monthlySalary: 5000,
//     role: "Recruiter",
//   },
//   {
//     id: 5,
//     name: "Eve",
//     department: "Sales",
//     monthlySalary: 4500,
//     role: "Manager",
//   },
//   {
//     id: 6,
//     name: "Frank",
//     department: "IT",
//     monthlySalary: 8000,
//     role: "Developer",
//   },
//   {
//     id: 7,
//     name: "Grace",
//     department: "HR",
//     monthlySalary: 6000,
//     role: "Manager",
//   },
// ];

// Tasks (stages):
// 1. Grouping by department: Group employees by their department. You will get an
// object where the keys are department names and the values are arrays of
// employees in that department.
// 2. Department financial statistics: For each department, calculate:
// ○ The total number of employees in the department

// ○ The average monthly salary (rounded to two decimal places)

// Expected intermediate result could look like:
// {
// IT: { count: 3, averageSalary: 9000.00 },
// Sales: { count: 2, averageSalary: 4250.00 },
// HR: { count: 2, averageSalary: 5500.00 }
// }
// 3.
// 4. Top earners in the department: For each department, return a list of the top three
// highest-earning employees (or fewer if the department has fewer than 3 employees).
// The list should be sorted in descending order by salary.
// Final result: Return an object that contains a summary for each department: the data from
// step 2 and the top earners from step 3, for example:
// {
// IT: {
// count: 3,
// averageSalary: 9000.00,
// topEarners: ["Charlie", "Frank", "Alice"]
// },
// Sales: {
// count: 2,
// averageSalary: 4250.00,
// topEarners: ["Eve", "Bob"]
// },
// HR: {
// count: 2,

// averageSalary: 5500.00,
// topEarners: ["Grace", "Diana"]
// }
// }

const getCompanyInfo = (employees) => {
  const groupByDepartment = employees.reduce((summary, employee) => {
    if (!summary[employee.department]) {
      summary[employee.department] = [];
    }

    summary[employee.department].push(employee);

    return summary;
  }, {});

  const departmentsData = groupByDepartment;

  const getDepartmentFinancialStatistics = Object.keys(
    groupByDepartment
  ).reduce((result, department) => {
    const totalEmployeesInTheDepartment = departmentsData[department].length;
    const totalSalaryInTheDepartment = departmentsData[department].reduce(
      (total, employee) => {
        return total + employee.monthlySalary;
      },
      0
    );
    const averageSalary =
      totalSalaryInTheDepartment / totalEmployeesInTheDepartment;

    const topEarners = departmentsData[department]
      .sort((a, b) => b.monthlySalary - a.monthlySalary)
      .slice(0, 3)
      .map((user) => user.name);

    result[department] = {
      count: totalEmployeesInTheDepartment,
      averageSalary: Math.round((averageSalary + Number.EPSILON) * 100) / 100,
      topEarners,
    };

    return result;
  }, {});

  return getDepartmentFinancialStatistics;
};
