import { box_size } from "./config.js";

export let snake = [{ x: 200, y: 200 }];
export let direction = "RIGHT";

export function setDirection(newDir) {
  direction = newDir;
}

export function moveSnake() {
  const head = { ...snake[0] };

  if (direction === "LEFT") head.x -= box_size;
  if (direction === "RIGHT") head.x += box_size;
  if (direction === "UP") head.y -= box_size;
  if (direction === "DOWN") head.y += box_size;

  snake.unshift(head);
  snake.pop();

  return head;
}

export function growSnake() {
  const tail = snake[snake.length - 1];
  snake.push({ ...tail });
}

export function resetSnake() {
  snake = [{ x: 200, y: 200 }];
  direction = "RIGHT";
}
