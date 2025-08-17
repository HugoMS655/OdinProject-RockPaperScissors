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
  const humanChoice = prompt("What is your choice?");

  switch (humanChoice) {
    case null:
      console.log("Invalid input");
      break;
    case "rock":
      console.log("You chose rock.");
      break;
    case "paper":
      console.log("You chose paper.");
      break;
    case "scissors":
      console.log("You chose scissors.");
      break;
  }
}
