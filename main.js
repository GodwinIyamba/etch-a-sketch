const container = document.querySelector('.container');

for(let i = 0; i < 256; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    container.appendChild(tile);
}