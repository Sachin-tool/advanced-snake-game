import { setDirection, direction, resetSnake } from "./snake.js";
import { gameState } from "./gameState.js";
import { resetScore } from "./score.js";

export function initControls() {
  document.addEventListener("keydown", e => {
    if (!gameState.gameOver) {
      if (e.key === "ArrowLeft" && direction !== "RIGHT") setDirection("LEFT");
      if (e.key === "ArrowRight" && direction !== "LEFT") setDirection("RIGHT");
      if (e.key === "ArrowUp" && direction !== "DOWN") setDirection("UP");
      if (e.key === "ArrowDown" && direction !== "UP") setDirection("DOWN");
    }

    if (e.code === "Space") {
      gameState.paused = !gameState.paused;
    }

    if (e.code === "Enter" && gameState.gameOver) {
      gameState.gameOver = false;
      gameState.paused = false;
      resetSnake();
      resetScore();
    }
  });
}
