import { getInputDir } from "./input.js";
export const SPEED = 10;
var body = [
    { x: 11, y: 11 },
    { x: 11, y: 11 },
];
var newBodySegs = 0;
export function update() {
    addSeg();
    var dir = getInputDir();
    for (var i = body.length - 2; i >= 0; i--) {
        body[i + 1] = { ...body[i] };
        body[i].x += dir.x;
        body[i].y += dir.y;
    }
}
export function draw(board) {
    body.forEach((e) => {
        var snkElement = document.createElement("div");
        snkElement.style.gridRowStart = e.y.toString();
        snkElement.style.gridColumnStart = e.x.toString();
        snkElement.classList.add("snake");
        board.appendChild(snkElement);
    });
}
export function onSnk(pos, { ignoreHead = false } = {}) {
    return body.some((seg, index) => {
        if ((ignoreHead && index === 0) || (ignoreHead && index === 1))
            return false; //! problem solved by ignoring sec index
        return overlapPos(pos, seg);
    });
}
export function expandSnk(EXPAND) {
    newBodySegs += EXPAND;
}
function overlapPos(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
function addSeg() {
    for (var i = 0; i < newBodySegs; i++) {
        body.push({ ...body[body.length - 1] });
    }
    newBodySegs = 0;
}
export function getSnkHead() {
    return body[0];
}
export function snkBitSnk() {
    return onSnk(body[0], { ignoreHead: true });
}
