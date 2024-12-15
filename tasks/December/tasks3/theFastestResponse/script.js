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

let dataInfo = document.getElementById("data");

const fetchFromMirrorA = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
    setTimeout(() => {
      console.log("delay1", delay);
      resolve("Data: fetch1");
    }, delay);
  });
};

const fetchFromMirrorB = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
    setTimeout(() => {
      console.log("delay2", delay);
      resolve("Data: fetch2");
    }, delay);
  });
};

const fetchFromMirrorC = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (3000 - 500 + 1) + 500);
    setTimeout(() => {
      console.log("delay3", delay);
      resolve("Data: fetch3");
    }, delay);
  });
};

const timedOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Timed out");
    }, 3000);
  });
};

const promises = [
  fetchFromMirrorA(),
  fetchFromMirrorB(),
  fetchFromMirrorC(),
  timedOut(),
];

Promise.race(promises)
  .then((value) => {
    console.log("the fastest fetch:", value);
    dataInfo.innerHTML = value;
  })
  .catch((error) => {
    console.log(error);
    dataInfo.innerHTML = "No mirror responded in time.";
  });
