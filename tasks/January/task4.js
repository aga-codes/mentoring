// Task 4
// Description: You have an array of objects representing users and their orders. Each object
// has id, name, and an orders array containing numeric order values. Write a function that
// returns an array of three usernames with the highest total order values.
// Input data (example):
const users = [
  { id: 1, name: "Alice", orders: [100, 50, 20] },
  { id: 2, name: "Bob", orders: [200, 10] },
  { id: 3, name: "Charlie", orders: [50, 50, 50, 50] },
  { id: 4, name: "Diana", orders: [500] },
  { id: 5, name: "Eve", orders: [1, 1, 1, 1, 200] },
];

// Assume the sums are:
// ● Alice: 170
// ● Bob: 210
// ● Charlie: 200
// ● Diana: 500
// ● Eve: 204
// The top three are: Diana, Bob, Eve.
// Expected result:
// ["Diana", "Bob", "Eve"]

const getHighOrderUsers = (users) => {
  const allUsers = users.map((user) => ({
    name: user.name,
    totalOrderValue: user.orders.reduce((total, num) => total + num, 0),
  }));

  const sortedUsers = allUsers.sort(
    (a, b) => b.totalOrderValue - a.totalOrderValue
  );
  const highOrderUsers = sortedUsers.slice(0, 3).map((user) => user.name);

  return highOrderUsers;
};

