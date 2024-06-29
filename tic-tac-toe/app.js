const gameBoard = document.getElementById("gameBoard");
const cells = Array.from(document.querySelectorAll(".cell"));
const gameStatus = document.getElementById("gameStatus");
const resetButton = document.getElementById("resetButton");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const handleCellClick = (e) => {
  const cell = e.target;
  const cellIndex = cells.indexOf(cell);

  if (board[cellIndex] !== "" || !isGameActive) {
    return;
  }

  updateCell(cell, cellIndex);
  checkResult();
};

const updateCell = (cell, index) => {
  board[index] = currentPlayer;
  cell.innerText = currentPlayer;
};

const changePlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameStatus.innerText = `Player ${currentPlayer}'s turn`;
};

const checkResult = () => {
  let roundWon = false;

  for (let i = 0; i < winningCombinations.length; i++) {
    const winCondition = winningCombinations[i];
    const a = board[winCondition[0]];
    const b = board[winCondition[1]];
    const c = board[winCondition[2]];

    if (a === "" || b === "" || c === "") {
      continue;
    }

    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    gameStatus.innerText = `Player ${currentPlayer} wins!`;
    isGameActive = false;
    return;
  }

  if (!board.includes("")) {
    gameStatus.innerText = `It's a draw!`;
    isGameActive = false;
    return;
  }

  changePlayer();
};

const resetGame = () => {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  isGameActive = true;
  gameStatus.innerText = `Player ${currentPlayer}'s turn`;

  cells.forEach((cell) => {
    cell.innerText = "";
  });
};

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
resetButton.addEventListener("click", resetGame);
