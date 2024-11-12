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

function playRound(humanChoice, computerChoice) {
    const roundScore = document.querySelector("#round-score-container");
    const matchScore = document.querySelector("#match-score-container");
    if (humanChoice == "rock") { 
        if (computerChoice == "rock") {
            roundScore.innerHTML = "Its a tie! You both chose rock!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (computerChoice == "paper") {
            computerScore += 1;
            roundScore.innerHTML = "You lose. Computer chose paper!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else {
            humanScore += 1;
            roundScore.innerHTML = "You win!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1;
            roundScore.innerHTML = "You win!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (computerChoice == "paper") {
            roundScore.innerHTML = "Its a tie! You both chose paper!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else {
            computerScore += 1;
            roundScore.innerHTML = "You lose. Computer chose scissors!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        }
    } else {    // human chooses scissors
        if (computerChoice == "rock") { 
            computerScore += 1;
            roundScore.innerHTML = "You lose. Computer chose rock!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else if (computerChoice == "paper") {
            humanScore += 1;
            roundScore.innerHTML = "You win!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        } else {
            roundScore.innerHTML = "Its a tie! You both chose scissors!";
            matchScore.innerHTML = `User Score: ${humanScore} - Computer Score: ${computerScore}`;
        }
    }
}
function playGame() {
    // Rock button

    const rockButton = document.querySelector("#rockButton");
    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    // Paper button
    const paperButton = document.querySelector("#paperButton");
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    // Scissors button
    const scissorsButton = document.querySelector("#scissorsButton");
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     console.log("Your score: " + humanScore);
//     console.log("Computer score: " + computerScore);
// }

// const main = document.querySelector("#main");
// const gameScore = document.createElement("div");

// gameScore.classList.add("content");
// gameScore.textContent = "Testing TEXT";
// main.appendChild(gameScore);

console.log(playGame());