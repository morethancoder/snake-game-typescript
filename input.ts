interface Idirection {
  x: number;
  y: number;
}

var inputDir: Idirection = {
  x: 0,
  y: 0,
};

var lastInputDir: Idirection = {
  x: 0,
  y: 0,
};

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (inputDir.y !== 0) break;
      inputDir = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (inputDir.y !== 0) break;
      inputDir = { x: 0, y: 1 };
      break;
    case "ArrowRight":
      if (inputDir.x !== 0) break;
      inputDir = { x: 1, y: 0 };
      break;
    case "ArrowLeft":
      if (inputDir.x !== 0) break;
      inputDir = { x: -1, y: 0 };
      break;
  }
});
export function getInputDir(): Idirection {
  lastInputDir = inputDir;
  return inputDir;
}
