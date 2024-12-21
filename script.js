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

const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return "tie";
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

function updateScore() {
  scoreDiv.textContent = `Score -> Human: ${humanScore}, Computer: ${computerScore}`;
}

// Function to check if the game is over
function checkGameOver() {
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore > computerScore
        ? "You win the game!"
        : "Computer wins the game!";
    resultDiv.textContent = winner;
    resultDiv.style.fontWeight = "bold";

    // Reset scores
    humanScore = 0;
    computerScore = 0;
    updateScore();
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.getAttribute("data-choice");
    const computerChoice = getComputerChoice();

    const resultMessage = playRound(humanChoice, computerChoice);

    resultDiv.textContent = resultMessage;

    updateScore();

    // Check if the game is over
    checkGameOver();
  });
});
