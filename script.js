const gridContainer = document.querySelector('.grid-container');
const createGridBtn = document.querySelector('#create-grid');
const clearGridBtn = document.querySelector('#clear-grid');
const domBody = document.querySelector('body');
let squareColor = "black";
let mouseDown = false;

createGridBtn.addEventListener('click', createGridSquares);
clearGridBtn.addEventListener('click', clearGrid);
domBody.addEventListener('mousedown', (e) => mouseDown = true);
domBody.addEventListener('mouseup', (e) => mouseDown = false);


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
    newSquare.addEventListener('mousedown', changeColor);
    newSquare.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(newSquare);
  }

}

function updateGridDimensions(dimension) {
  gridContainer.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
}

function clearGrid() {
  const childDivs = Array.from(gridContainer.children);

  childDivs.forEach((div) => {
    div.style.removeProperty('background-color');
  });

}

function changeColor(e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  this.style.backgroundColor = squareColor;
}
