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

const message = document.getElementById("message");

const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 30 });
    }, 1000);
  });
};

const getPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post1", "post2", "post3"]);
    }, 2000);
  });
};

const getComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(["comment1", "comment2", "comment3"]);
      reject(new Error("Fetching comments failed"));
    }, 1500);
  });
};
message.innerHTML = "Loading...";

const getData = async () => {
  try {
    const [userInfo, allPosts, allComments] = await Promise.all([
      getUserData(),
      getPosts(),
      getComments(),
    ]);
    message.innerHTML = `user: ${JSON.stringify(
      userInfo
    )}, posts: ${JSON.stringify(allPosts)}, comments: ${JSON.stringify(
      allComments
    )}`;
  } catch (error) {
    console.log("error", error);
    message.innerHTML = "Some error has occured. Please come back later.";
  }
};

getData();
