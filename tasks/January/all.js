
// Task 6
// Description: You have an array of objects representing products. Each object contains:
// ● name: the product name
// ● category: the product category, e.g., "Electronics", "Books", "Clothing"
// ● price: the product price (number)
// ● rating: the product rating (number from 1 to 5)
// Input data (example):
// const products = [
// { name: "Laptop", category: "Electronics", price: 4000, rating:
// 4.5 },
// { name: "Smartphone", category: "Electronics", price: 3000,
// rating: 4.7 },
// { name: "Headphones", category: "Electronics", price: 500, rating:
// 4.2 },
// { name: "T-Shirt", category: "Clothing", price: 50, rating: 3.8 },
// { name: "Jeans", category: "Clothing", price: 120, rating: 4.0 },
// { name: "Jacket", category: "Clothing", price: 300, rating: 4.1 },
// { name: "Cookbook", category: "Books", price: 80, rating: 4.9 },
// { name: "Novel", category: "Books", price: 40, rating: 4.3 }
// ];

// Tasks (stages):

// 1. Grouping by category: Group the products by category. You will get an object
// where the key is the category name and the value is the array of products in that
// category.
// 2. Sorting within categories: In each category, sort the products by price in ascending
// order.
// 3. Calculating the median price in each category: For each category, calculate the
// median price of the products. The median is the middle element of the sorted list; if
// there is an even number of elements, take the average of the two middle elements.
// For example, if "Electronics" has the prices [500, 3000, 4000] after sorting, the
// median is 3000.
// 4. Counting products above a rating threshold: Assume a rating threshold, e.g.,
// 4.0. Count how many products in each category have a rating greater than or equal
// to this threshold.
// 5. Final result: Return an object that, for each category, contains:
// ○ the list of products sorted by price
// ○ the median price
// ○ the number of products with a rating >= 4.0

// Example (shortened):
// {
// Electronics: {
// products: [
// { name: "Headphones", price: 500, rating: 4.2 },
// { name: "Smartphone", price: 3000, rating: 4.7 },
// { name: "Laptop", price: 4000, rating: 4.5 }
// ],
// medianPrice: 3000,
// countHighRating: 3
// },
// Clothing: {
// products: [
// { name: "T-Shirt", price: 50, rating: 3.8 },
// { name: "Jeans", price: 120, rating: 4.0 },

// { name: "Jacket", price: 300, rating: 4.1 }
// ],
// medianPrice: 120,
// countHighRating: 2 // (Jeans and Jacket)
// },
// Books: {
// products: [
// { name: "Novel", price: 40, rating: 4.3 },
// { name: "Cookbook", price: 80, rating: 4.9 }
// ],
// medianPrice: 60, // (average of 40 and 80)
// countHighRating: 2
// }
// }

// Task 7

// You have an array of album objects. Each album has:
// ● title (string)
// ● artist (string)
// ● releaseYear (number)
// ● genres (array of strings)
// ● tracks (array of objects with title (string), duration (number, seconds), plays
// (number))
// You need to:
// ● Group albums by their primary genre (the first in the genres array).
// ● For each genre group, determine the album with the highest average track duration.
// ● Gather all tracks from all albums and find the top 5 tracks by plays.
// ● Return a summary of how many albums each genre has, which album in each genre
// has the highest average track duration (and what that duration is), and a list of the
// top 5 most played track titles with their play counts.
// Example Input:
// const albums = [
// {
// title: "Blue Horizon",
// artist: "The Sea Birds",
// releaseYear: 1990,
// genres: ["Rock", "Indie"],
// tracks: [
// { title: "Waves", duration: 180, plays: 500 },
// { title: "Dusk", duration: 200, plays: 300 }
// ]
// },
// {

// title: "Silent Echoes",
// artist: "Amber Sky",
// releaseYear: 1995,
// genres: ["Jazz", "Blues"],
// tracks: [
// { title: "Nightfall", duration: 240, plays: 150 },
// { title: "Whispers", duration: 220, plays: 1000 },
// { title: "Misty", duration: 260, plays: 750 }
// ]
// }
// ];

// Example Final Result (format):
// {
// genres: {
// Rock: {
// albumCount: 1,
// highestAverageDurationAlbum: {
// title: "Blue Horizon",
// averageTrackDuration: 190.00
// }
// },
// Jazz: {
// albumCount: 1,

// highestAverageDurationAlbum: {
// title: "Silent Echoes",
// averageTrackDuration: 240.00
// }
// }
// },
// topTracks: [
// { title: "Whispers", plays: 1000 },
// { title: "Misty", plays: 750 },
// { title: "Waves", plays: 500 },
// { title: "Dusk", plays: 300 },
// { title: "Nightfall", plays: 150 }
// ]
// }

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