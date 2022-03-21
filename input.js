var inputDir = {
    x: 0,
    y: 0,
};
var lastInputDir = {
    x: 0,
    y: 0,
};
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowUp":
            if (inputDir.y !== 0)
                break;
            inputDir = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (inputDir.y !== 0)
                break;
            inputDir = { x: 0, y: 1 };
            break;
        case "ArrowRight":
            if (inputDir.x !== 0)
                break;
            inputDir = { x: 1, y: 0 };
            break;
        case "ArrowLeft":
            if (inputDir.x !== 0)
                break;
            inputDir = { x: -1, y: 0 };
            break;
    }
});
export function getInputDir() {
    lastInputDir = inputDir;
    return inputDir;
}
