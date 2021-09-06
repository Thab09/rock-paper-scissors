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
  let options = document.querySelectorAll("img");
  let playerSelection = "";
  let player = 0;
  let computer = 0;
  options.forEach((img) => {
    img.addEventListener("click", () => {
      playerSelection = img.id;
      let computerSelection = computerPlay();
      let result = playRound(playerSelection, computerSelection);
      if (result.includes("Player")) {
        player += 1;
      } else if (result.includes("Computer")) {
        computer += 1;
      }
      const container = document.querySelector("#container");
      const printResult = document.createElement("p");
      printResult.textContent = `${result} ${player}:${computer}`;
      container.appendChild(printResult);
      if (player === 5 || computer === 5) {
        document.getElementById("rock").style.pointerEvents = "none";
        document.getElementById("paper").style.pointerEvents = "none";
        document.getElementById("scissor").style.pointerEvents = "none";
        const newGame = document.createElement("button");
        const verdict = document.createElement("h4");
        if (player === 5) {
          verdict.textContent = "Congratulations! You won.";
        } else {
          verdict.textContent = "You lost. Try Again.";
        }
        verdict.style.cssText = "margin: 10px 0px;";
        newGame.textContent = "NEW GAME";
        newGame.style.cssText =
          "color: black; background-color: white; margin-top: 10px; font-size: 1.2rem; width: 125px;";
        newGame.onclick = () => window.location.reload();
        container.appendChild(verdict);
        container.appendChild(newGame);
      }
    });
  });
  // let playerSelection = prompt("Rock, Paper or Scissor?");
}

game();
