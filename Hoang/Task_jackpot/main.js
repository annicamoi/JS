const number1 = document.querySelector("#number-1");
const number2 = document.querySelector("#number-2");
const number3 = document.querySelector("#number-3");
const number4 = document.querySelector("#number-4");
const number5 = document.querySelector("#number-5");
const playBtn = document.querySelector("#play-btn");
const result = document.querySelector("#result");

const getRandomNum = () => {
  let randomNum = Math.floor(Math.random() * 10);
  if (randomNum > 5) {
    randomNum = getRandomNum();
  }
  return randomNum;
};

const play = () => {
  const randomNumber1 = getRandomNum();
  const randomNumber2 = getRandomNum();
  const randomNumber3 = getRandomNum();
  const randomNumber4 = getRandomNum();
  const randomNumber5 = getRandomNum();
  const chanceOfWinning = (1 / (2 * 2 * 2 * 2 * 2)) * 100;
  number1.innerText = randomNumber1;
  number2.innerText = randomNumber2;
  number3.innerText = randomNumber3;
  number4.innerText = randomNumber4;
  number5.innerText = randomNumber5;
  if (
    randomNumber1 === 5 &&
    randomNumber2 === 5 &&
    randomNumber3 === 5 &&
    randomNumber4 === 5 &&
    randomNumber1 === 5
  ) {
    result.innerText = "Congrats!!! You Win The Jackpot.";
  } else {
    result.innerText = `You Lost! 
    Your chance of winning is: ${chanceOfWinning}%`;
    playBtn.innerText = "Start Again";
  }
};

playBtn.addEventListener("click", play);