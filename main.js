const container = document.querySelector('.grid-container');
const clearBtn = document.querySelector('.btn-clear');
const userInput = document.querySelector('.user-choice');

let gridTile = 16;
let width = 540 / gridTile;
let height = 540 / gridTile;
let gridSize = gridTile * gridTile;

//Initialize: Create grid squares and add event listener
function initialize(squareSize, squareWidth, squareHeight) {
    for(let i = 0; i < squareSize; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.width = `${squareWidth}px`;
    tile.style.height = `${squareHeight}px`;
    
    container.appendChild(tile);

    tile.addEventListener('mouseover', (e) => {
        e.target.classList.add('hover');
        if(tile.classList.contains('hover')) {
        let hsl = `hsl(${Math.floor(Math.random() * 100)}, 100%, 50%)`;
        tile.style.backgroundColor = hsl;
        
        }
    })} 
}

//Clear grid
function clearGrid() {
    gridTile = Number(userInput.value)
    userInput.value = "";
    
    const tiles = document.querySelectorAll('.tile');
    for(let i = 0; i < tiles.length; i++) {
        container.removeChild(tiles[i])
    }
    
    width = 540 / gridTile;
    height = 540/ gridTile;
    gridSize = gridTile * gridTile;

    initialize(gridSize, height, width);
    
}

window.addEventListener('click', initialize(gridSize, width, height));
clearBtn.addEventListener('click', clearGrid);


