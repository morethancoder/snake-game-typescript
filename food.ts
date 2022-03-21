import { onSnk, expandSnk } from "./snake.js";
import { randomGridPos } from "./grid.js";
var EXPAND: number = 1;

interface Ifood {
  x: number;
  y: number;
}
var food: Ifood = getRandomFood();
export function update(): void {
  if (onSnk(food)) {
    expandSnk(EXPAND);
    food = getRandomFood();
  }
}
export function draw(board: HTMLElement): void {
  var foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y.toString();
  foodElement.style.gridColumnStart = food.x.toString();
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

function getRandomFood(): Ifood {
  var newFood: Ifood;
  while (newFood == null || onSnk(newFood)) {
    newFood = randomGridPos();
  }
  return newFood;
}
