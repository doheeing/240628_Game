let computerNum = 0;

let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");


const pickRandomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
};

const play = () => {
  let userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "UP"
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN"
  } else {
    resultArea.textContent = "정답";
  }
};

playButton.addEventListener("click", play);
pickRandomNum();
