const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetButton');
const message = document.querySelector('.message');
let currentPlayer = 'X';
let gameEnded = false;

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (!cell.textContent && !gameEnded) {
      cell.textContent = currentPlayer;
      cell.style.backgroundColor = 'red';
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      checkWin();
    }
  });
});

resetButton.addEventListener('click', resetGame);

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6] // Diagonales
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      message.textContent = `¡${currentPlayer === 'X' ? 'O' : 'X'} ha ganado!`;
      gameEnded = true;
      break;
    }
  }

  if (!gameEnded && Array.from(cells).every(cell => cell.textContent)) {
    message.textContent = '¡Empate!';
    gameEnded = true;
  }
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = 'Yellow';
  });
  currentPlayer = 'X';
  gameEnded = false;
  message.textContent = '';
}