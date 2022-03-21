import { getInputDir } from "./input.js";

export const SPEED: number = 10;
interface IBodySeg {
  x: number;
  y: number;
}

var body: IBodySeg[] = [
  { x: 11, y: 11 },
  { x: 11, y: 11 },
];

var newBodySegs: number = 0;
export function update(): void {
  addSeg();
  var dir = getInputDir();
  for (var i = body.length - 2; i >= 0; i--) {
    body[i + 1] = { ...body[i] };
    body[i].x += dir.x;
    body[i].y += dir.y;
  }
}
export function draw(board: HTMLElement): void {
  body.forEach((e) => {
    var snkElement = document.createElement("div");
    snkElement.style.gridRowStart = e.y.toString();
    snkElement.style.gridColumnStart = e.x.toString();
    snkElement.classList.add("snake");
    board.appendChild(snkElement);
  });
}

export function onSnk(food: IBodySeg): boolean {
  return body.some((seg) => {
    return overlapPos(food, seg);
  });
}
export function expandSnk(EXPAND: number): void {
  newBodySegs += EXPAND;
}

function overlapPos(pos1: IBodySeg, pos2: IBodySeg): boolean {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSeg(): void {
  for (var i = 0; i < newBodySegs; i++) {
    body.push({ ...body[body.length - 1] });
  }
  newBodySegs = 0;
}
