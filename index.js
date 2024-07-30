//Parameters
let blockSize = 100;
let cutBotomTails = false;
let mainColor = 240;
let range = 50;

let widthBlockSize;
let heightBlockSize;
let width;
let height;

let colorsPalette = [];
for (let i = mainColor - range / 2; i <= mainColor + range / 2; i++) {
  colorsPalette.push(i);
}
colorsPalette = colorsPalette.concat(colorsPalette.toReversed().splice(1));

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

function addTiles() {
  document.getElementById("block").remove();
  const block = document.createElement("div");
  block.id = "block";
  const tiles = [];
  for (let i = 0; i < height * width; i++) {
    tiles.push(Math.floor(Math.random() * range));
    const tile = document.createElement("div");
    tile.id = i;
    //colors
    tile.style.border = `5px solid black`;

    tile.style.boxSizing = `border-box`;

    //sizes
    tile.style.width = `${widthBlockSize}px`;
    tile.style.height = `${heightBlockSize}px`;
    block.appendChild(tile);
  }
  document.body.appendChild(block);
  return tiles;
}

function drawTiles() {
  tiles.forEach((color, index) => {
    document.getElementById(index).style.backgroundColor = `hsl(${colorsPalette[color]}, 70%, 50%`;
    tiles[index] = (color + Math.floor(Math.random() * 2)) % (colorsPalette.length + 1);
  });
}

setSizes();
let tiles = addTiles();

setInterval(() => {
  drawTiles();
}, 40);
window.addEventListener("resize", () => {
  setSizes();
  tiles = addTiles();
});
