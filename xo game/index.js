let box = document.querySelectorAll(".box");
let indexChar = 0;
let charName = ["x", "o"];
let positions = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let varForEndGame = 1;

function createChar(name) {
  let span = document.createElement("span");
  span.className = name;
  span.classList.add("close");
  return span;
}
function drowWinLine(row, col, deg, str = "row", tr_x = 0, tr_y = 0) {
  let winLine = document.querySelector(".win-line");
  winLine.style.left = `${row}%`;
  winLine.style.top = `${col}%`;
  winLine.style.display = "block";
  winLine.style.transform = `translate(${tr_x}%,${tr_y}%) rotate(${deg}deg)`;
  if (str === "row") {
    winLine.style.width = `95%`;
    winLine.style.height = `10px`;
  } else {
    winLine.style.height = `95%`;
    winLine.style.width = `10px`;
  }
}

function checkWin() {
  for (let i = 0; i < positions.length; i++) {
    if (
      positions[i][0] === positions[i][1] &&
      positions[i][1] === positions[i][2] &&
      positions[i][0] !== " " &&
      positions[i][1] !== " " &&
      positions[i][2] !== " "
    ) {
      drowWinLine(2.5, 33 * (i + 1) - 17, 0, "row");
      break;
    }
    if (
      positions[0][i] === positions[1][i] &&
      positions[1][i] === positions[2][i] &&
      positions[0][i] !== " " &&
      positions[1][i] !== " " &&
      positions[2][i] !== " "
    ) {
      console.log(i);
      drowWinLine(33 * (i + 1) - 17, 2.5, 0, "col");
      break;
    }
    if (
      positions[0][0] === positions[1][1] &&
      positions[1][1] === positions[2][2] &&
      positions[0][0] !== " " &&
      positions[1][1] !== " " &&
      positions[2][2] !== " "
    ) {
      console.log(positions);
      drowWinLine(50, 50, 45, "row", -50, 50);
      break;
    }
    if (
      positions[0][2] === positions[1][1] &&
      positions[1][1] === positions[2][0] &&
      positions[0][2] !== " " &&
      positions[1][1] !== " " &&
      positions[2][0] !== " "
    ) {
      drowWinLine(50, 50, -45, "row", -50, 50);
      break;
    }
  }
  if (varForEndGame >= 9) {
    console.log("game over");
  }
  varForEndGame++;
}



box.forEach((e, j) => {
  e.addEventListener("click", (e) => {
    if (!e.target.classList.contains("close")) {
      e.target.appendChild(createChar(charName[indexChar]));
      e.target.classList.add("close");
      e.target.classList.add(`box-${charName[indexChar]}`);
      positions[Math.floor(j / 3)][j % 3] = charName[indexChar];
      indexChar++;
      if (indexChar === 2) {
        indexChar = 0;
      }
      checkWin();
    }
  });
});
