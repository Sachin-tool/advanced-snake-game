export function randomInt(max) {
  return Math.floor(Math.random() * max);
}
export function isSamePosition(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
