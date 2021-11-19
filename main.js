const container = document.querySelector('.grid-container');
const clearBtn = document.querySelector('.clear-grid');

let gridTile = 50;
let width = 340 / gridTile;
let height = 340 / gridTile;
let gridSize = gridTile * gridTile;


function initialize(squareSize, squareWidth, squareHeight) {
    for(let i = 0; i < squareSize; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.width = `${squareWidth}px`;
    tile.style.height = `${squareHeight}px`;
    container.appendChild(tile);

    tile.addEventListener('mouseover', (e) => e.target.classList.add('hover'))
    }
}

function clearGrid() {
    do {
        gridTile = prompt('Input number of square. Maximum square is 100: ')
    } while (gridTile > 100 && gridTile);

    const tiles = document.querySelectorAll('.tile');
    for(let i = 0; i < tiles.length; i++) {
        container.removeChild(tiles[i])
    }
    
    width = 340 / gridTile;
    height = 340/ gridTile;
    gridSize = gridTile * gridTile;

    initialize(gridSize, height, width);
    console.log(width);
}
console.log(width);



window.addEventListener('click', initialize(gridSize, width, height));
clearBtn.addEventListener('click', clearGrid);

