let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");

const genComputerChoice = () => {
  let option = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};
// =========Draw Game============
const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw !";
    msg.style.backgoundColor="aqua"

};
// ============ShowWinner===========
const showWinner = (userWin) => {
  if (userWin) {
    console.log("You Win !");
    msg.innerText = "You Win !";
    msg.style.backgoundColor="green"
  } else {
    console.log("you Lose !");
    msg.innerText = "You Lose !";
    msg.style.backgoundColor="red"

  }
};
const playGames = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genComputerChoice();
  console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    // garw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor,paper     computer choice
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissor      computer choice
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock , paper       computer choice
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    // console.log("choice was clicked");
    const userChoice = choice.getAttribute("id");
    // console.log("Choice Was Clicked",userChoice);
    playGames(userChoice);
  });
});
