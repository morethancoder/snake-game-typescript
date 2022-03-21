import { draw as drawSnk, SPEED } from "./snake.js";
import { update as updateSnk } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { offGrid } from "./grid.js";
import { getSnkHead, snkBitSnk } from "./snake.js";

var last = 0;
var gameOver = false;
var board = document.getElementById("board");

function main(current: number): void {
  if (gameOver) {
    if (confirm("snake dead, try again 🤙")) {
      window.location.reload();
    }
    return;
  }
  //! 👆 we return so we dont run code below
  window.requestAnimationFrame(main);
  var secLastRender: number = (current - last) / 1000;
  if (secLastRender < 1 / SPEED) return;
  //   console.log("render");
  last = current;
  update();
  draw();
  checkGameOver();
}
window.requestAnimationFrame(main);

function update(): void {
  updateSnk();
  updateFood();
}
function draw(): void {
  board.innerHTML = "";
  drawSnk(board);
  drawFood(board);
}

function checkGameOver(): void {
  gameOver = offGrid(getSnkHead()) || snkBitSnk();
}
