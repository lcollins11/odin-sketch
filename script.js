//page sections
const container = document.querySelector('#container');


//buttons
const newBoard = document.querySelector('#newBoardBtn');


function createGrid() {
    let input = parseInt(prompt("Please enter a size, maximum allowed is 100."));
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

  function fillSquare(){
    this.style.background = "black";
  }
  

newBoard.addEventListener('click', createGrid);


function deleteBoard() {
    container.innerHTML = '';
}

