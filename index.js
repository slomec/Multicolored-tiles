//Parameters
let blockSize = 100;
let cutBotomTails = false;
let colorsPalette = [
  [255, 32, 78],
  [160, 21, 62],
  [93, 14, 65],
  [0, 34, 77],
];

let widthBlockSize;
let heightBlockSize;
let width;
let height;

function setSizes() {
  if (cutBotomTails) {
    widthBlockSize = window.innerWidth / Math.round(window.innerWidth / blockSize);
    heightBlockSize = widthBlockSize;
    width = window.innerWidth / widthBlockSize;
    height = Math.ceil(window.innerHeight / blockSize);
  } else {
    widthBlockSize = window.innerWidth / Math.round(window.innerWidth / blockSize);
    heightBlockSize = window.innerHeight / Math.round(window.innerHeight / blockSize);
    width = window.innerWidth / widthBlockSize;
    height = window.innerHeight / heightBlockSize;
  }
}

function drawTails() {
  document.getElementById("block").remove();
  const block = document.createElement("div");
  block.id = "block";
  for (let i = 0; i < height * width; i++) {
    let [c1, c2, c3] = colorsPalette[Math.round(Math.random() * (colorsPalette.length - 1))];
    const tile = document.createElement("div");
    tile.id = i;
    //colors
    tile.style.borderLeft = `10px solid rgb(${c1 + 20}, ${c2 + 20}, ${c3 + 20})`;
    tile.style.borderTop = `10px solid rgb(${c1 + 30}, ${c2 + 30}, ${c3 + 30})`;
    tile.style.borderRight = `10px solid rgb(${c1 - 20}, ${c2 - 20}, ${c3 - 20})`;
    tile.style.borderBottom = `10px solid rgb(${c1 - 30}, ${c2 - 30}, ${c3 - 30})`;

    tile.style.boxSizing = `border-box`;
    tile.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
    //sizes
    tile.style.width = `${widthBlockSize}px`;
    tile.style.height = `${heightBlockSize}px`;
    block.appendChild(tile);
  }
  document.body.appendChild(block);
}

setSizes();
drawTails();

window.addEventListener("resize", () => {
  setSizes();
  drawTails();
});
