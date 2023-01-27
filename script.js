

function createGrid(numberPerRow) {
    const container = document.querySelector('#container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const rowBreaker = numberPerRow + 1;
  
    for (let i = 1; i < total; i++) {
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
  
const newBoard = document.querySelector('#newBoardBtn');

newBoard.addEventListener('click', function(e){
    let input = prompt("Please enter size of board, up to a maximum of 100.");
    createGrid(input);
})

//   createGrid(64);

