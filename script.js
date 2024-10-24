const btn = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const alert = document.querySelector("h2");
const alert2 = document.querySelector("h4");
const main = document.querySelector("main");
let computerMode = false;

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
  return [...btn].every((e) => e.disabled);
};

function clear() {
  btn.forEach((e) => {
    e.innerHTML = "";
    e.disabled = false;
  });
  alert.innerHTML = "";
  plyerXscor = [];
  plyerOscor = [];
  plyerX = true;
  alert2.innerHTML = "";
}

reset.addEventListener("click", () => {
  clear();
});
//////


  let plyerX = true;
  let plyerXscor = [];
  let plyerOscor = [];

  btn.forEach((e) => {
    e.addEventListener("click", () => {
      if (plyerX) {
        e.innerHTML = "x";
        plyerX = !plyerX;
        plyerXscor.push(parseInt(e.value));
        e.disabled = true;

        if (checkWin(plyerXscor)) {
          alert.innerHTML = "Winner X";
          btn.forEach((e) => {
            e.disabled = true;
          });
        } else if (gameOverChecker()) {
          alert2.innerHTML = "Game Over";
        }
      } else {
        e.innerHTML = "O";
        plyerX = !plyerX;
        plyerOscor.push(parseInt(e.value));
        e.disabled = true;
        if (checkWin(plyerOscor)) {
          alert.innerHTML = "Winner O";
          btn.forEach((e) => {
            e.disabled = true;
          });
        } else if (gameOverChecker()) {
          alert2.innerHTML = "Game Over";
        }
      }
    });
  });




// changer.addEventListener('click',()=>{
//   changer.innerHTML='GO, <i class="fa-solid fa-user-group"></i> Friend Mode'
//   clear();
// main.classList.add("warm")
// main.classList.remove("cool")
// changer.classList.add('friendBtn')
// changer.classList.remove('computerBtn')
// })

// changer.addEventListener("click", () => {
//   computerMode = !computerMode;
//   if (computerMode) {
//     changer.innerHTML =
//       'GO, <i class="fa-solid fa-user-group"></i> Friend Mode';
//     main.classList.add("warm");
//     main.classList.remove("cool");
//     changer.classList.add("friendBtn");
//     changer.classList.remove("computerBtn");
//     clear();

//   } else {
//     changer.innerHTML = 'GO, <i class="fa-solid fa-robot"></i> Computer Mod';
//     main.classList.add("cool");
//     main.classList.remove("warm");
//     changer.classList.add("computerBtn");
//     changer.classList.remove("friendBtn");
//     clear();
//     frindPlay()
//   }

// });
