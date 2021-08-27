function computerPlay() {
  let compAnswer = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * compAnswer.length);
  return compAnswer[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper beats Rock. Computer wins!";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "Rock beats Scissor. Player wins!";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "Scissor beats Paper. Computer wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper beats Rock. Player wins!";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "Rock beats Scissor. Computer wins!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "Scissor beats Paper. Player wins!";
  } else {
    return "It's a draw.";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissor?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
