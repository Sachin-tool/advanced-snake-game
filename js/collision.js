export function wallCollision(head, size) {
  return (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= size ||
    head.y >= size
  );
}

export function selfCollision(head, snake) {
  return snake.slice(1).some(
    seg => seg.x === head.x && seg.y === head.y
  );
}
