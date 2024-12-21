// creare function getComputerChoice
// return rock paper || scissors
// use math.random(2)
//

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors"; // If the number is 2, return "scissors"

    default:
      return "Invalid choice"; // (Just in case something weird happens)
  }
}

function getHumanChoice() {
  let input = prompt("Rock, paper or scissors?", "").toLowerCase();

  switch (input) {
    case "rock":
    case "paper":
    case "scissors":
    // return input

    default:
      return "invalid response";
  }
}

function playGame() {
  // calling these functions here so the score doesn't reset
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    // Check if the human wins
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
      return "human";
    } else {
      // Otherwise, the computer wins
      computerScore++;
      console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
      return "computer";
    }
  }

  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(
      `Scores after Round ${round}: Human - ${humanScore}, Computer - ${computerScore}`
    );
  }

  console.log("\nGame Over!");
  if (humanScore > computerScore) {
    alert("Congratulations, you win the game!");
  } else if (computerScore > humanScore) {
    alert("Sorry, the computer wins this time.");
  } else if (computerScore === humanScore) {
    alert("It's a tie!");
  }
}

playGame();
