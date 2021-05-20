let gestures = ["rock", "paper", "scissors"];
let playerSelection;
let computerScore = 0;
let userScore = 0;

function computerPlay() {
  let gestures = ["rock", "paper", "scissors"];
  // return at random "rock", "paper", or "scissors"
  return gestures[Math.floor(Math.random() * gestures.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt(
    "Do you choose Rock, Paper or Scissors?"
  ).toUpperCase();

  console.log(computerSelection);
  console.log(playerSelection);
  // PLAYER LOSES
  if (playerSelection === "ROCK" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
    computerScore++;
  } else if (playerSelection === "PAPER" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats paper");
    computerScore++;
  } else if (playerSelection === "SCISSORS" && computerSelection === "rock") {
    console.log("You Lose! Rock beats scissors");
    computerScore++;

    // PLAYER WINS
  } else if (playerSelection === "ROCK" && computerSelection === "scissors") {
    console.log("You Win! Rock beats scissors");
    userScore++;
  } else if (playerSelection === "PAPER" && computerSelection === "rock") {
    console.log("You Win! Paper beats rock");
    userScore++;
  } else if (playerSelection === "SCISSORS" && computerSelection === "paper") {
    console.log("You win! Scissors beats paper");
    userScore++;

    // DRAW
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a draw!");
  } else if (playerSelection === "ROCK" && computerSelection === "rock") {
    console.log("It's a draw!");
  } else if (playerSelection === "PAPER" && computerSelection === "paper") {
    console.log("It's a draw!");
  }

  return userScore;
  return computerScore;
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (userScore > computerScore) {
    console.log(
      `Congratulations, the User beat the Computer with a score of ${userScore} to ${computerScore}!`
    );
  } else if (computerScore > userScore) {
    console.log(
      `Better luck next time! The Computer beat the User with a score of ${computerScore} to ${userScore}!`
    );
  } else {
    console.log(
      `It was a draw between the Computer and the User with a score of ${computerScore} and ${userScore}`
    );
  }
}

game();
