// JS Tasks - part 3

// Task 1: Book Collection Analysis
// Story: You work as an archivist in a large library. You’ve received data on various books and
// their authors, but you need to filter and transform it so that other employees can quickly
// understand the collection.

// Input data:
// const books = [
// { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", pages:
// 423, category: "Fantasy" },
// { title: "The Lord of the Rings: The Two Towers", author: "J.R.R. Tolkien", pages: 352,
// category: "Fantasy" },
// { title: "The Lord of the Rings: The Return of the King", author: "J.R.R. Tolkien", pages: 416,
// category: "Fantasy" },
// { title: "Bleak House", author: "Charles Dickens", pages: 960, category: "Classic" },
// { title: "The Master and Margarita", author: "Mikhail Bulgakov", pages: 480, category:
// "Classic" },
// { title: "A Game of Thrones", author: "George R.R. Martin", pages: 694, category: "Fantasy"
// }
// ];

// Goals:
// 1. Extract only the books belonging to the "Fantasy" category.
// 2. For each selected book, create an object containing:
// ○ A shortened title (first three words).
// ○ The author's initials.
// 3. Check if every selected fantasy book has more than 300 pages.
// 4. Create a final summary string that lists the shortened titles and authors (with initials)
// separated by commas.
// 5. Return an object that includes:
// ○ A boolean indicating whether all fantasy books have more than 300 pages.
// ○ The array of transformed fantasy books.
// ○ The summary string.

// Example result
// {
// allLong: true,
// transformedBooks: [
// { shortTitle: "The Lord of", initials: "J.R.R.T" },
// { shortTitle: "The Lord of", initials: "J.R.R.T" },
// { shortTitle: "The Lord of", initials: "J.R.R.T" },
// { shortTitle: "A Game of", initials: "G.R.R.M" }
// ],
// summary: "The Lord of (J.R.R.T), The Lord of (J.R.R.T), The Lord of (J.R.R.T), A Game of
// (G.R.R.M)"
// }

// Task 2: Customer Order Analysis
// Story: You work at a courier company. You have a list of orders with information on whether
// they’ve been delivered and which customer placed them. You want to prepare a summary
// report to identify patterns and ensure customer satisfaction.
// Input data:
// const orders = [
// { id: 1, customer: { name: "Anna", city: "Warsaw" }, delivered: true, items: ["Notebook",
// "Pen"] },
// { id: 2, customer: { name: "Paul", city: "Krakow" }, delivered: false, items: ["Laptop"] },
// { id: 3, customer: { name: "Anna", city: "Warsaw" }, delivered: true, items: ["Keyboard"] },
// { id: 4, customer: { name: "Zofia", city: "Gdansk" }, delivered: false, items: ["Monitor",
// "Mouse"] }
// ];

// Goals:
// 1. Determine if there is any undelivered order from "Warsaw."
// 2. Verify if all delivered orders contain at least one item.
// 3. Create a summary object where:
// ○ Keys are customer names.
// ○ Values are arrays of items from their delivered orders (no duplicates, if any
// item appears multiple times).

// 4. From that summary object, generate a sorted list of customers by their name and the
// total count of delivered items they received.
// 5. Return an object that includes:
// ○ The boolean result from step 1.
// ○ The boolean result from step 2.
// ○ The customer summary object.
// ○ The sorted list of customers (array of objects with name and count
// properties).

// Example result:
// {
// undeliveredFromWarsaw: false,
// allDeliveredHaveItems: true,
// customerSummary: {
// "Anna": ["Notebook", "Pen", "Keyboard"]
// },
// sortedCustomers: [
// { name: "Anna", count: 3 }
// ]
// }

// Task 3: Employee Data Processing
// Story: The company conducted a survey among employees about their hobbies. You want
// to create a tool that can help identify how many employees share each hobby and provide
// insights into overall hobby distribution.
// Input data
// const employees = {
// "John": ["Football", "Chess"],
// "Anna": ["Dancing", "Chess", "Cycling"],
// "Peter": ["Running"],
// "Zoe": ["Dancing", "Football"],
// "Camille": ["Chess", "Running"]
// };

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

// Task 4: Managing Warehouse Products
// Story: Your warehouse stores products along with prices and stock levels. You want to
// display information about available products (stock > 0) with a discount and create a
// summary to help with quick inventory checks.
// Input data
// const products = [
// { name: "Phone", price: 2000, stock: 3 },
// { name: "Laptop", price: 4500, stock: 0 },
// { name: "Headphones", price: 300, stock: 12 },
// { name: "Keyboard", price: 150, stock: 1 }
// ];
// Goals:
// 1. Filter only those products that have stock > 0.
// 2. Apply a 10% discount to their price.
// 3. Create a string listing available products and their discounted prices, separated by
// commas, with the price in parentheses.
// 4. Check if every available product after the discount is priced below a certain threshold
// (e.g., 2000).
// 5. Return an object that includes:
// ○ The array of transformed products (with discounted prices).
// ○ The summary string.
// ○ A boolean indicating if all discounted products are below the chosen
// threshold.

// Example result
// {
// transformedProducts: [
// { name: "Phone", discountedPrice: 1800, stock: 3 },
// { name: "Headphones", discountedPrice: 270, stock: 12 },
// { name: "Keyboard", discountedPrice: 135, stock: 1 }
// ],
// summary: "Phone (1800), Headphones (270), Keyboard (135)",
// allBelowThreshold: true
// }

// Task 5: Simulated Data Fetching with Timers
// Story:
// You are building a dashboard that displays data from multiple remote sources. However,
// your remote services are not ready yet. You need to simulate data fetching using setTimeout
// to mimic delays from different APIs. You also want to show a loading state to the user.
// Input / Scenario:
// ● You have three simulated API endpoints (just functions) that return data after a delay:
// ○ getUserData() returns { name: "Alice", age: 30 } after 1 second.
// ○ getPosts() returns an array of posts after 2 seconds.
// ○ getComments() returns an array of comments after 1.5 seconds.

// Goals:
// 1. Simulate calling all three endpoints.
// 2. Show a "Loading..." message immediately.
// 3. Once all three pieces of data have been fetched, clear the loading state and log the
// combined result:
// { user: { name: "Alice", age: 30 }, posts: [...], comments: [...] }
// 4. If any of the "fetches" fail (simulate by randomly throwing an error in one of the functions),
// display an error message instead.

// Task 6: Periodic Updates with setInterval
// Story:
// You are implementing a live sports score ticker. Scores are updated by a server at irregular
// intervals (simulate these using random setTimeout calls), and you want to display the
// latest score every 2 seconds until the score reaches a certain threshold.
// Input / Scenario:
// ● A function fetchScore() that after a random delay (between 500ms and 2000ms)
// returns a random score increment.
// ● You call fetchScore() repeatedly to simulate incoming score updates.
// Goals:
// 1. Start a setInterval that runs every 2 seconds.
// 2. Each time setInterval fires, check if new score data is available. If not, show "No
// new score..."
// 3. When fetchScore() completes and you have a new score, add it to the total score
// and display it.
// 4. Stop the setInterval loop automatically when the score reaches 10 or more, then
// display "Game Over".

// Task 7: Fastest Response Wins
// Story:
// You are querying data from multiple mirrors of the same API. Whichever responds first, you
// will use that data to update your application. This simulates having multiple CDN endpoints
// and choosing the fastest one.
// Input / Scenario:
// ● Three functions: fetchFromMirrorA(), fetchFromMirrorB(),
// fetchFromMirrorC().
// Each returns a promise that resolves with the same data but after different random
// delays (between 500ms and 3000ms).
// Goals:
// 1. Trigger all three fetches at the same time.
// 2. Use a mechanism to select the first resolved promise.
// 3. When the first promise resolves, log the data and cancel any other ongoing fetch
// operations (if possible, or just ignore them).

// 4. If none of them respond within 3 seconds, show an error message "No mirror
// responded in time." (Simulate timeout using setTimeout and a promise race
// against a timeout promise).