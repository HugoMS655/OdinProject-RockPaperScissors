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
