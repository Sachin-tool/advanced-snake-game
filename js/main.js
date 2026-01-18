import { canvas_size, FPS, box_size } from "./config.js";
import { snake, moveSnake, growSnake } from "./snake.js";
import { food, generateFood } from "./food.js";
import { wallCollision, selfCollision } from "./collision.js";
import { drawSnake, drawFood, drawGameOver } from "./renderer.js";
import { initControls } from "./controls.js";
import { increaseScore, updateScoreUI, score } from "./score.js";
import { gameState } from "./gameState.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas_size;
canvas.height = canvas_size;

initControls();
updateScoreUI();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (gameState.gameOver) {
    drawGameOver(ctx, score);
    return;
  }

  if (!gameState.paused) {
    const head = moveSnake();

    if (wallCollision(head, canvas_size) || selfCollision(head, snake)) {
      gameState.gameOver = true;
      return;
    }

    if (head.x === food.x && head.y === food.y) {
      growSnake();
      increaseScore();
      const newFood = generateFood();
      food.x = newFood.x;
      food.y = newFood.y;
    }
  }

  drawFood(ctx, food, box_size);
  drawSnake(ctx, snake, box_size);
}

setInterval(gameLoop, 1000 / FPS);
