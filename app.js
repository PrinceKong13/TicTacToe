let cells = document.querySelectorAll(".row > div");
let winnerDisplay = document.querySelector("#board > h2");
let gameState = {
  gameEnd: false,
  numOfClicks: 0,
  lastPlayerMove: "O",
};

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

//Places an X or an O in the clicked cell depending on whose turn it is and resets the board at game end
function cellClicked() {
  if (gameState.gameEnd === true) {
    resetBoard();
  } else if (
    event.target.textContent === "X" ||
    event.target.textContent === "O"
  ) {
  } else if (gameState.lastPlayerMove === "O") {
    event.target.textContent = "X";
    gameState.lastPlayerMove = "X";
    ++gameState.numOfClicks;
    checkWinner();
  } else {
    event.target.textContent = "O";
    gameState.lastPlayerMove = "O";
    ++gameState.numOfClicks;
    checkWinner();
  }
}

//checks to see if there is a winner after each click and displays a message if so. Will also determine draws
function checkWinner() {
  if (
    (cells[0].textContent === gameState.lastPlayerMove &&
      cells[1].textContent === gameState.lastPlayerMove &&
      cells[2].textContent === gameState.lastPlayerMove) ||
    (cells[3].textContent === gameState.lastPlayerMove &&
      cells[4].textContent === gameState.lastPlayerMove &&
      cells[5].textContent === gameState.lastPlayerMove) ||
    (cells[6].textContent === gameState.lastPlayerMove &&
      cells[7].textContent === gameState.lastPlayerMove &&
      cells[8].textContent === gameState.lastPlayerMove) ||
    (cells[0].textContent === gameState.lastPlayerMove &&
      cells[3].textContent === gameState.lastPlayerMove &&
      cells[6].textContent === gameState.lastPlayerMove) ||
    (cells[1].textContent === gameState.lastPlayerMove &&
      cells[4].textContent === gameState.lastPlayerMove &&
      cells[7].textContent === gameState.lastPlayerMove) ||
    (cells[2].textContent === gameState.lastPlayerMove &&
      cells[5].textContent === gameState.lastPlayerMove &&
      cells[8].textContent === gameState.lastPlayerMove) ||
    (cells[0].textContent === gameState.lastPlayerMove &&
      cells[4].textContent === gameState.lastPlayerMove &&
      cells[8].textContent === gameState.lastPlayerMove) ||
    (cells[6].textContent === gameState.lastPlayerMove &&
      cells[4].textContent === gameState.lastPlayerMove &&
      cells[2].textContent === gameState.lastPlayerMove)
  ) {
    winnerDisplay.textContent = gameState.lastPlayerMove + " Wins!";
    gameState.gameEnd = true;
  } else if (gameState.numOfClicks === 9) {
    winnerDisplay.textContent = "Draw!";
    gameState.gameEnd = true;
  }
}

//resets the board
function resetBoard() {
  gameState.lastPlayerMove = "O";
  gameState.numOfClicks = 0;
  gameState.gameEnd = false;
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  winnerDisplay.textContent = " ";
}
