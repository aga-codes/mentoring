// Task 3: Employee Data Processing
// Story: The company conducted a survey among employees about their hobbies. You want
// to create a tool that can help identify how many employees share each hobby and provide
// insights into overall hobby distribution.
// Input data
const employees = {
  John: ["Football", "Chess"],
  Anna: ["Dancing", "Chess", "Cycling"],
  Peter: ["Running"],
  Zoe: ["Dancing", "Football"],
  Camille: ["Chess", "Running"],
};

const employees2 = {
  John: ["Football", "Chess"],
  Anna: ["Dancing", "Chess", "Cycling"],
  Peter: ["Running", "Chess"],
  Zoe: ["Dancing", "Football", "Chess"],
  Camille: ["Chess", "Running"],
};

// Goals:
// 1. Create an object where each key is a hobby and its value is the count of employees
// interested in that hobby.
// 2. Sort the hobbies alphabetically.
// 3. Check if there is any hobby shared by all employees.
// 4. Find out which hobby has the highest count of interested employees.
// 5. Return an object that includes:
// ○ The alphabetically sorted hobby-count object.
// ○ A boolean indicating if any hobby is shared by all employees.
// ○ The name of the hobby with the highest popularity and the associated count.

// Example result
// {
// hobbies: {
// "Chess": 3,
// "Cycling": 1,
// "Dancing": 2,
// "Football": 2,
// "Running": 2
// },
// hobbyForAll: false,
// mostPopularHobby: { name: "Chess", count: 3 }
// }

export const employeeDataProcessing = (employees) => {
  const getHobbies = () => {
    const allHobbies = {};

    for (let employee in employees) {
      employees[employee].forEach((hobby) => {
        if (allHobbies[hobby]) {
          allHobbies[hobby]++;
        } else {
          allHobbies[hobby] = 1;
        }
      });
    }

    return allHobbies;
  };

  const getTheMostPopularHobby = () => {
    const hobbies = getHobbies();
    let numberOfInterestedPeople = 0;
    let theMostPopularHobby = "";

    for (let key in hobbies) {
      if (hobbies[key] > numberOfInterestedPeople) {
        numberOfInterestedPeople = hobbies[key];
        theMostPopularHobby = key;
      }
    }

    return {
      name: `${theMostPopularHobby}`,
      count: Number(numberOfInterestedPeople),
    };
  };

  const getHobbyForAll = () => {
    const hobbies = Object.values(employees);
    let isHobbyForAll = false;

    for (let hobby of hobbies[0]) {
      if (hobbies.every((interests) => interests.includes(hobby))) {
        isHobbyForAll = true;
      }
    }
    return isHobbyForAll;
  };

  return {
    hobbies: getHobbies(),
    hobbyForAll: getHobbyForAll(),
    mostPopularHobby: getTheMostPopularHobby(),
  };
};
