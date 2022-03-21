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

export function offGrid(pos: Ipos): boolean {
  return pos.x < 1 || pos.y < 1 || pos.x > GRID_SIZE || pos.y > GRID_SIZE;
}
