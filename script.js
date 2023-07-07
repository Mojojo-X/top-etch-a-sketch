const gridContainer = document.querySelector('.grid-container');
const createGridBtn = document.querySelector('#create-grid');
let squareColor = "black";

function promptForDimensions() {
  const invalid = [NaN, 0];

  do {
    let input = prompt("Please enter a grid size.  Max Limit: 100.");
    let dimension = Number(input);

    if (invalid.includes(dimension) || dimension > 100 || input === null) {
      alert(`Invalid Input: ${input} .Please try again.`);
    } else {
      return dimension;
    }
  } while (true);
}


function createGridSquares() {

  let dimension = promptForDimensions();

  if (gridContainer.innerHTML !== '') {
    gridContainer.innerHTML = '';
  }

  updateGridDimensions(dimension);
  const totalSquares = dimension ** 2;

  for (let i = 0; i < totalSquares; i++) {
    let newSquare = document.createElement("div");
    newSquare.addEventListener('click', function () {
      this.style.backgroundColor = squareColor;
    });
    newSquare.addEventListener('dragenter', function () {
      this.style.backgroundColor = squareColor;
    });
    gridContainer.appendChild(newSquare);
  }

}

function updateGridDimensions(dimension) {
  gridContainer.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}

createGridBtn.addEventListener('click', createGridSquares);
