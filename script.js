//page sections
const container = document.querySelector('#container');

//buttons
const newBoard = document.querySelector('#newBoardBtn');
const boardSlider = document.querySelector('#boardSize');
const eraseBoard = document.querySelector('#clear');


//Listeners
newBoard.addEventListener('click', createGrid);
eraseBoard.addEventListener('click', eraser);


//helper functions
function deleteBoard() {
    container.innerHTML = '';
}

function fillSquare(){
    this.style.background = "black";
  }

  function getSize(){
    return boardSlider.value;
  }

//button functions

function eraser() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.background = "white";
    })
}

function createGrid() {
    let input = parseInt(getSize());
    deleteBoard();
    const total = (input * input) + input;
    const rowBreaker = input + 1;
    for (let i = 0; i < total; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (i % rowBreaker === 0) {
        square.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        square.style.cssText = "border: 0.3px  solid gray; flex: 1; aspect-ratio: 1/1; width: 16px;";
      }
      container.appendChild(square);
    }
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.addEventListener('mouseover', fillSquare);
    })
  }



