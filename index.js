//Parameters
let blockSize = 50;
let cutBotomTails = false;
let mainColor = 0;
let range = 50;
let saturation = 60;

let widthBlockSize;
let heightBlockSize;
let width;
let height;
let tilesSaturation = [];
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

function upSatutation(id) {
  tilesSaturation[id] = 100;
}

function addTiles() {
  document.getElementById("block").remove();
  const block = document.createElement("div");
  block.id = "block";
  const tiles = [];
  tilesSaturation = [];
  for (let i = 0; i < height * width; i++) {
    tiles.push(Math.floor(Math.random() * range));
    tilesSaturation.push(saturation);
    const tile = document.createElement("div");
    tile.id = i;
    tile.onmouseover = () => {
      upSatutation(i);
    };
    //colors
    tile.style.border = `${blockSize / 25}px solid black`;

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
    document.getElementById(
      index
    ).style.backgroundColor = `hsl(${colorsPalette[color]}, ${tilesSaturation[index]}%, 50%`;
    tiles[index] = (color + Math.floor(Math.random() * 2)) % (colorsPalette.length + 1);
    if (tilesSaturation[index] > saturation) {
      tilesSaturation[index] -= 1;
    }
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
