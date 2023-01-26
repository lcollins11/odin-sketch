const container = document.querySelector('#container');

let gridSize = 16;

for(let i = 0; i <squareQty*16; i++){
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

container.style.width = width;
