let cells = document.querySelectorAll(".row > div");
let lastPlayerMove = "O";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

//Places an X or an O in the clicked cell depending on whose turn it is
function cellClicked() {
  if (lastPlayerMove === "O") {
    event.target.textContent = "X";
    lastPlayerMove = "X";
  } else {
    event.target.textContent = "O";
    lastPlayerMove = "O";
  }
}

function checkWinner() {
    
}
