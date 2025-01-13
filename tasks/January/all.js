// Task 8
// You have an array of student objects. Each student has:
// ● id (number)
// ● name (string)
// ● scores (object with keys math, english, history, science and numeric values)
// Any missing subject in scores should be treated as 0. You need to:
// ● Ensure all students have all four subjects.
// ● Calculate their average score.
// ● Find the top 3 students by average score.
// ● Assign each student a letter grade based on their average (A, B, C, D, F).
// ● Return a normalized list of students with averages, the top 3 students, and a
// distribution of students by grade category.
// Example Input:
// const students = [
// { id: 1, name: "Alice", scores: { math: 85, english: 92, history:
// 76 } },
// { id: 2, name: "Bob", scores: { math: 65, science: 70 } },
// { id: 3, name: "Charlie", scores: { english: 100, history: 90,
// science: 95 } }
// ];
// Example Final Result (format):
// {
// normalizedStudents: [
// { id: 1, name: "Alice", scores: { math: 85, english: 92, history: 76,
// science: 0 }, average: 63.25, grade: "D" },
// { id: 2, name: "Bob", scores: { math: 65, english: 0, history: 0,
// science: 70 }, average: 33.75, grade: "F" },
// { id: 3, name: "Charlie", scores: { math: 0, english: 100, history: 90,
// science: 95 }, average: 71.25, grade: "C" }
// ],
// top3Students: ["Charlie", "Alice", "Bob"],
// gradeDistribution: {
// A: [],
// B: [],
// C: ["Charlie"],
// D: ["Alice"],
// F: ["Bob"]
// }

// Task 9

// You have an array representing items in a shopping cart. Each item has:
// ● name (string)
// ● price (number)
// ● quantity (number)
// ● tags (array of strings)
// ● Optional discountCode (string) with known codes: "SAVE10" (10% off),
// "HALFOFF" (50% off).
// Unknown or no code = no discount.
// You need to:
// ● Merge duplicates of the same product, summing quantities. If multiple discount codes
// apply, choose the one with the largest discount.
// ● Apply discounts to get the effective price.
// ● Calculate the total cart cost.
// ● Group items by their main tag (the first tag in the tags array).
// ● For each tag group, find the most expensive item (by effectivePrice *
// quantity).
// ● Return the grouped items with a summary of the most expensive item per tag, along
// with the total cost of the cart.
// Example Input:

// const cart = [
// { name: "Wireless Mouse", price: 50, quantity: 2, tags:
// ["electronics", "accessories"], discountCode: "SAVE10" },
// { name: "Wireless Mouse", price: 50, quantity: 1, tags:
// ["electronics", "accessories"] },
// { name: "USB Cable", price: 10, quantity: 5, tags:
// ["electronics"], discountCode: "HALFOFF" },
// { name: "T-Shirt", price: 20, quantity: 3, tags: ["clothing"] },
// { name: "Jacket", price: 100, quantity: 1, tags: ["clothing",
// "outerwear"], discountCode: "UNKNOWN" }
// ];

// Example Final Result (format):
// {
// totalCost: 317,
// groups: {
// electronics: {
// items: [
// { name: "Wireless Mouse", price: 50, quantity: 3,

// discountCode: "SAVE10", effectivePrice: 45 },

// { name: "USB Cable", price: 10, quantity: 5, discountCode:

// "HALFOFF", effectivePrice: 5 }
// ],
// mostExpensiveItem: { name: "Wireless Mouse", totalCost: 135 }
// },
// clothing: {
// items: [
// { name: "T-Shirt", price: 20, quantity: 3, effectivePrice:

// 20 },

// { name: "Jacket", price: 100, quantity: 1, discountCode:

// "UNKNOWN", effectivePrice: 100 }
// ],
// mostExpensiveItem: { name: "Jacket", totalCost: 100 }
// }
// }
// }