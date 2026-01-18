import { canvas_size } from "./config.js";

export function drawSnake(ctx, snake, boxSize) {
  snake.forEach((seg, i) => {
    ctx.fillStyle = i === 0 ? "#22c55e" : "#16a34a";
    ctx.fillRect(seg.x, seg.y, boxSize, boxSize);
  });
}

export function drawFood(ctx, food, boxSize) {
  ctx.fillStyle = "#ef4444";
  ctx.fillRect(food.x, food.y, boxSize, boxSize);
}

export function drawGameOver(ctx, score) {
  ctx.fillStyle = "rgba(0,0,0,0.75)";
  ctx.fillRect(0, 0, canvas_size, canvas_size);

  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  ctx.font = "bold 32px Arial";
  ctx.fillText("GAME OVER", canvas_size / 2, 150);

  ctx.font = "20px Arial";
  ctx.fillText(`Score: ${score}`, canvas_size / 2, 200);

  ctx.font = "16px Arial";
  ctx.fillText("Press ENTER to Restart", canvas_size / 2, 240);
}
