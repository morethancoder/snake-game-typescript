interface Ipos {
  x: number;
  y: number;
}
var GRID_SIZE: number = 21;
export function randomGridPos(): Ipos {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}
