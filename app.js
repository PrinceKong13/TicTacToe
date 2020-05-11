let cells = document.querySelectorAll(".row > div");
let lastPlayerMove = "O";
let winnerDisplay = document.querySelector("#board > h2");
let numOfClicks = 0;
let gameEnd = false;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

//Places an X or an O in the clicked cell depending on whose turn it is
function cellClicked() {
  if (gameEnd === true) {
    resetBoard();
  } else if (lastPlayerMove === "O") {
    event.target.textContent = "X";
    lastPlayerMove = "X";
    ++numOfClicks;
    checkWinner();
  } else {
    event.target.textContent = "O";
    lastPlayerMove = "O";
    ++numOfClicks;
    checkWinner();
  }
}

//checks to see if there is a winner after each click and displays a message if so. Will also determine draws
function checkWinner() {
  if (
    (cells[0].textContent === lastPlayerMove &&
      cells[1].textContent === lastPlayerMove &&
      cells[2].textContent === lastPlayerMove) ||
    (cells[3].textContent === lastPlayerMove &&
      cells[4].textContent === lastPlayerMove &&
      cells[5].textContent === lastPlayerMove) ||
    (cells[6].textContent === lastPlayerMove &&
      cells[7].textContent === lastPlayerMove &&
      cells[8].textContent === lastPlayerMove) ||
    (cells[0].textContent === lastPlayerMove &&
      cells[3].textContent === lastPlayerMove &&
      cells[6].textContent === lastPlayerMove) ||
    (cells[1].textContent === lastPlayerMove &&
      cells[4].textContent === lastPlayerMove &&
      cells[7].textContent === lastPlayerMove) ||
    (cells[2].textContent === lastPlayerMove &&
      cells[5].textContent === lastPlayerMove &&
      cells[8].textContent === lastPlayerMove) ||
    (cells[0].textContent === lastPlayerMove &&
      cells[4].textContent === lastPlayerMove &&
      cells[8].textContent === lastPlayerMove) ||
    (cells[6].textContent === lastPlayerMove &&
      cells[4].textContent === lastPlayerMove &&
      cells[2].textContent === lastPlayerMove)
  ) {
    winnerDisplay.textContent = lastPlayerMove + " Wins!";
    console.log(lastPlayerMove + " Wins");
    gameEnd = true;
  } else if (numOfClicks === 9) {
    console.log("Draw");
    winnerDisplay.textContent = "Draw!";
    gameEnd = true;
  }
}

//resets the board
function resetBoard() {
  lastPlayerMove = "O";
  numOfClicks = 0;
  gameEnd = "false";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  winnerDisplay.textContent = " ";
}
