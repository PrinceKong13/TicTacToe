let cells = document.querySelectorAll(".row > div");
let lastPlayerMove = "O";
let winner = null;
let winnerDisplay = document.querySelector("#board > h2");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

//Places an X or an O in the clicked cell depending on whose turn it is
function cellClicked() {
  if (lastPlayerMove === "O") {
    event.target.textContent = "X";
    lastPlayerMove = "X";
    checkWinner();
  } else {
    event.target.textContent = "O";
    lastPlayerMove = "O";
    checkWinner();
  }
}

//checks to see if there is a winner after each click and displays a message if so
function checkWinner() {
  if (
    cells[0].textContent === "X" &&
    cells[1].textContent === "X" &&
    cells[2].textContent === "X"
  ) {
    winnerDisplay.textContent = "X Wins!";
    console.log("X Wins");
  }
}

//resets the board after a winner is declared
function resetBoard() {
  lastPlayerMove = "O";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = " ";
  }
}
