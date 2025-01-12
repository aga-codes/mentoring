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

let scoreInfoMsg = document.getElementById("score");
const SCORE_THREASHOLD = 10;
let score = 0;

const fetchScore = () => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * (2000 - 500 + 1) + 500);
    setTimeout(() => {
      const score = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      resolve(score);
    }, delay);
  });
};

const scoreTimer = setInterval(async () => {
  const newScore = await fetchScore();

  if (newScore) {
    console.log("new score", newScore);

    score += newScore;
    scoreInfoMsg.innerHTML = `Current score: ${score}`;

    if (score >= SCORE_THREASHOLD) {
      clearInterval(scoreTimer);
      scoreInfoMsg.innerHTML = "Game Over";
    }
  } else {
    scoreInfoMsg.innerHTML = "No new score...";
  }
}, 2000);
