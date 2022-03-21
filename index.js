import { draw as drawSnk, SPEED } from "./snake.js";
import { update as updateSnk } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
var last = 0;
var board = document.getElementById("board");
function main(current) {
    window.requestAnimationFrame(main);
    var secLastRender = (current - last) / 1000;
    if (secLastRender < 1 / SPEED)
        return;
    //   console.log("render");
    last = current;
    update();
    draw();
}
window.requestAnimationFrame(main);
function update() {
    updateSnk();
    updateFood();
}
function draw() {
    board.innerHTML = "";
    drawSnk(board);
    drawFood(board);
}
