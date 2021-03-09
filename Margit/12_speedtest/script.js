const circles = document.querySelectorAll(".circle");
const numberOfCircles = circles.length;
const scoreEl = document.querySelector(".score");
const modal = document.querySelector(".modal");
const result = document.querySelector(".result");
const restartButton = document.querySelector(".restart__button");
const stopButton = document.querySelector(".stop__button");
let score = 0;
let clearTimeoutId;

const startGame = () => {
  //pick a random circle
  let randomNumber = Math.floor(Math.random() * numberOfCircles);
  //initiate the circle
  circles[randomNumber].classList.add("active");

  let previousNumber;
  let timer = 2000;

  const myFunc = () => {
    //If the timer is less than 0, stop the game
    if (timer <= 0) {
      stopGame("Sorry you Lost! Your Final Score is " + score);
    }

    timer -= 50;

    //update the random number
    randomNumber = Math.floor(Math.random() * numberOfCircles);
    //check if the random number equals to the previous number, change the current number
    if (randomNumber === previousNumber) {
      if (randomNumber === numberOfCircles - 1) randomNumber = 0;
      randomNumber++;
    }
    //store the random Number
    previousNumber = randomNumber;
    //remove the active state of all circles
    circles.forEach((circle) => circle.classList.remove("active"));
    //add active state to the random circle
    circles[randomNumber].classList.add("active");

    clearTimeoutId = setTimeout(myFunc, timer);
  };
  setTimeout(myFunc, timer);
};

//Event listener on start game button
const startButton = document.querySelector(".start__button");
startButton.addEventListener("click", () => {
  console.log("start game");
  startGame();
});

//if the user click on the active circle, update the score
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    if (circle.classList.contains("active")) {
      score++;
      scoreEl.textContent = `Your score is: ${score}`;
    } else {
      //user clicks on the wrong circle
      stopGame("Sorry You Lost! Your Final Score is ");
    }
  });
});

//function stop the game
const stopGame = (message) => {
  //stop running the circle
  clearTimeout(clearTimeoutId);
  //popup the score
  modal.classList.add("show");
  result.textContent = `${message}: ${score}`;
};

//stop the game
stopButton.addEventListener("click", () => {
  stopGame("You Stop The Game. Your Final Score is ");
});

//restart the game
restartButton.addEventListener("click", () => {
  window.location.reload(true);
});