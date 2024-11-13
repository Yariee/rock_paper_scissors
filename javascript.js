let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function hideInstructions() {
    const instructions = document.querySelector(".initial-instructions");
    instructions.classList.add("hidden");
}

function trackScore(humanScore, computerScore) {
    const winner = document.querySelector(".winner");
    const winningPlayer = document.querySelector(".winner h1");
    if (humanScore == 5 || computerScore == 5) {
        winner.style.display = "flex";
        if (humanScore == 5) {
            winningPlayer.innerHTML = "You won!";
        } else {
            winningPlayer.innerHTML = "You lost...";
        }
    }

    window.addEventListener("keydown", function restart(event) {
        if (event.key == "r") {
            location.reload();
            window.removeEventListener("keydown", restart);
        }
    })
}

function playRound(humanChoice, computerChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    const roundScore = document.querySelector("#round-score-container");
    const matchScore = document.querySelector("#match-score-container");
    if (humanChoice == "rock") { 
        if (computerChoice == "rock") {
            roundScore.innerHTML = "Its a tie! You both chose rock!";
        } else if (computerChoice == "paper") {
            computerScore += 1;
            roundScore.innerHTML = "You lose. Computer chose paper!";
        } else {
            humanScore += 1;
            roundScore.innerHTML = "You win!";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1;
            roundScore.innerHTML = "You win!";
        } else if (computerChoice == "paper") {
            roundScore.innerHTML = "Its a tie! You both chose paper!";
        } else {
            computerScore += 1;
            roundScore.innerHTML = "You lose. Computer chose scissors!";
        }
    } else {    // human chooses scissors
        if (computerChoice == "rock") { 
            computerScore += 1;
            roundScore.innerHTML = "You lose. Computer chose rock!";
        } else if (computerChoice == "paper") {
            humanScore += 1;
            roundScore.innerHTML = "You win!";
        } else {
            roundScore.innerHTML = "Its a tie! You both chose scissors!";
        }
    }
    matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
    trackScore(humanScore, computerScore);
}
function playGame() {
    const rockButton = document.querySelector("#rockButton");
    const paperButton = document.querySelector("#paperButton");
    const scissorsButton = document.querySelector("#scissorsButton");


    // Rock button
    rockButton.addEventListener("click", () => {
        hideInstructions();
        playRound("rock", getComputerChoice());
    });

    // Paper button
    paperButton.addEventListener("click", () => {
        hideInstructions();
        playRound("paper", getComputerChoice());
    });

    // Scissors button
    scissorsButton.addEventListener("click", () => {
        hideInstructions();
        playRound("scissors", getComputerChoice());
    });
}

console.log(playGame());