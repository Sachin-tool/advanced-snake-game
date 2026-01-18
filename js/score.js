export let score = 0;
export let highScore = localStorage.getItem("snakeHighScore") || 0;

export function updateScoreUI() {
  document.getElementById("score").innerText = score;
  document.getElementById("highScore").innerText = highScore;
}

export function increaseScore() {
  score++;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("snakeHighScore", highScore);
  }
  updateScoreUI();
}

export function resetScore() {
  score = 0;
  updateScoreUI();
}
