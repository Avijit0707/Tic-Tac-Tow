const btn = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const alert = document.querySelector("h2");
const alert2 = document.querySelector("h4");
const main = document.querySelector("main");
main.classList.add("warm");
main.classList.remove("cool");
let isWinning;
const winning = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWin = (playerScore) => {
  return winning.some((combo) => {
    return combo.every((index) => playerScore.includes(index));
  });
};

const gameOverChecker = () => {
  return [...btn].every(e => e.disabled);
};

function clear() {
  btn.forEach((e) => {
    e.innerHTML = "";
    e.disabled = false;
  });
  alert.innerHTML = "";
  alert2.innerHTML = ""; // Clear previous game over message
  playerXscore = [];
  playerOscore = [];
  playerX = true;
}

let playerX = true;

let playerXscore = [];
let playerOscore = [];

btn.forEach((e) => {
  e.addEventListener("click", () => {
    if (playerX) {
      e.innerHTML = "X";
      playerXscore.push(parseInt(e.value));
      e.disabled = true;

      if (checkWin(playerXscore)) {
        alert.innerHTML = "Winner X";
        btn.forEach((e) => {
          e.disabled = true;
        });
      } else if (gameOverChecker()) {
        alert2.innerHTML = 'Game Over';
      } else {
        playerX = false; // Switch to computer's turn
        setTimeout(computerMove, 1000); // Delay computer move by 1 second
      }
    }
  });
});

const computerMove = () => {
  const availableButtons = [...btn].filter(e => !e.disabled); // Get all available buttons
  if (availableButtons.length > 0) {
    const randomButton = availableButtons[Math.floor(Math.random() * availableButtons.length)];
    randomButton.innerHTML = "O"; // Computer plays "O"
    playerOscore.push(parseInt(randomButton.value));
    randomButton.disabled = true;

    if (checkWin(playerOscore)) {
      alert.innerHTML = "Winner O";
      btn.forEach((e) => {
        e.disabled = true;
      });
    } else if (gameOverChecker()) {
      alert2.innerHTML = 'Game Over';
    } else {
      playerX = true; // Switch back to player's turn
    }
  }
};

reset.addEventListener("click", () => {
  clear();
});
