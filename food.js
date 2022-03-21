import { onSnk, expandSnk } from "./snake.js";
import { randomGridPos } from "./grid.js";
var EXPAND = 1;
var food = getRandomFood();
export function update() {
    if (onSnk(food)) {
        expandSnk(EXPAND);
        food = getRandomFood();
    }
}
export function draw(board) {
    var foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y.toString();
    foodElement.style.gridColumnStart = food.x.toString();
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}
function getRandomFood() {
    var newFood;
    while (newFood == null || onSnk(newFood)) {
        newFood = randomGridPos();
    }
    return newFood;
}
