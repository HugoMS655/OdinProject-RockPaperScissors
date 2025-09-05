/*  These variables are intended to
keep track of the scores for the human player and the computer player in a game of
rock-paper-scissors. 
The scores can be updated throughout the game as the players win rounds. */
let humanScore = 0;
let computerScore = 0;

/* 
getting buttons
getting html elements that represent the scores so that 
the display can be updated */
const gameButtons = document.querySelectorAll("button");
const hscore = document.querySelector("#playerscore");
const cscore = document.querySelector("#computerscore");

/*adding event listeners to buttons. */
gameButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.getAttribute("id")));
});

/**
 * The playRound function determines the outcome of a round in a rock-paper-scissors game and updates
 * the scores accordingly.
 * @param buttonId - The `buttonId` parameter in the `playRound` function represents the id of the
 * button that the player clicked to make their choice in a rock-paper-scissors game. This id is used
 * to determine the human player's choice in the game.
 */
function playRound(buttonId) {
  const humanChoice = getHumanChoice(buttonId);
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    changeDisplayedComputerScore();
    changeDisplayedPlayerScore();
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    changeDisplayedComputerScore();
  } else {
    humanScore++;
    changeDisplayedPlayerScore();
  }

  if (humanScore === 5) {
    console.log("You win!");
  } else if (computerScore === 5) {
    console.log("Computer Wins!");
  }
}

/**
 * The function generates a random choice of "rock", "paper", or "scissors" for the
 * computer using a random number between 1 and 3 for the three choices.
 */
function getComputerChoice() {
  let computerChoice = "";
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;

    case 2:
      computerChoice = "paper";
      break;

    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

/**
 * The function takes a button ID as input and based on the
 * button clicked returns the corresponding human choice
 * (rock, paper, or scissors).
 */
function getHumanChoice(buttonId) {
  let choice = "";
  switch (buttonId) {
    case "rock":
      choice = "rock";
      break;
    case "paper":
      choice = "paper";
      break;
    case "scissors":
      choice = "scissors";
      break;
    default:
      choice = null;
  }
  return choice;
}

function changeDisplayedComputerScore() {
  cscore.textContent = computerScore;
}

function changeDisplayedPlayerScore() {
  hscore.textContent = humanScore;
}
