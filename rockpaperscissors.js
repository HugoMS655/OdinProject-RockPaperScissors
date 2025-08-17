/*  These variables are intended to
keep track of the scores for the human player and the computer player in a game of
rock-paper-scissors. 
The scores can be updated throughout the game as the players win rounds. */
const humanScore = 0;
const computerScore = 0;

/**
 * The function `getComputerChoice` generates a random choice of "rock", "paper", or "scissors" for the
 * computer using a random number between 1 and 3 for the three choices
 */
function getComputerChoice() {
  const computerChoice = "";
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
}

/**
 * The function `getHumanChoice` prompts the user to input their choice of "rock", "paper", or
 * "scissors", validates the input, and returns the sanitized choice.
 * @returns The function `getHumanChoice()` returns the human's choice of "rock", "paper", or
 * "scissors" after validating and processing the input provided by the user. If the input is invalid
 * or if the user cancels the input prompt, the function returns `null`.
 */
function getHumanChoice() {
  let humanChoice = prompt("What is your choice? (rock, paper, or scissors)");

  if (humanChoice === null) {
    console.log("Input cancelled.");
    return null;
  }

  humanChoice = humanChoice.trim().toLowerCase();

  switch (humanChoice) {
    case "rock":
      console.log("You chose rock.");
      humanChoice = "rock";
      break;
    case "paper":
      console.log("You chose paper.");
      humanChoice = "paper";
      break;
    case "scissors":
      console.log("You chose scissors.");
      humanChoice = "scissors";
      break;
    default:
      console.log("Invalid input.Please enter rock, paper, or scissors.");
      humanChoice = null;
  }
  return humanChoice;
}
