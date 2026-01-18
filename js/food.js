import { box_size, canvas_size } from "./config.js";

export let food = generateFood();

export function generateFood() {
  return {
    x: Math.floor(Math.random() * (canvas_size / box_size)) * box_size,
    y: Math.floor(Math.random() * (canvas_size / box_size)) * box_size
  };
}
