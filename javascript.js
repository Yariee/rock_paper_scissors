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

function getHumanChoice() {
    let userChoice = prompt("Would you like to be rock, paper or scissors?").toLowerCase();
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        return userChoice;
    } else {
        alert("You did not choose a correct option. Please try again!")
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") { 
        if (computerChoice == "rock") {
            console.log("Its a tie! You both chose rock!");
        } else if (computerChoice == "paper") {
            computerScore += 1;
            console.log("You lose. Computer chose paper!");
        } else {
            humanScore += 1;
            console.log("You win!");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1;
            console.log("You win!");
        } else if (computerChoice == "paper") {
            console.log("Its a tie! You both chose paper!");
        } else {
            computerScore += 1;
            console.log("You lose. Computer chose scissors!");
        }
    } else {    // human chooses scissors
        if (computerChoice == "rock") { 
            computerScore += 1;
            console.log("You lose. Computer chose rock!");
        } else if (computerChoice == "paper") {
            humanScore += 1;
            console.log("You win!");
        } else {
            console.log("Its a tie! You both choose scissors!");
        }
    }
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;
console.log(playGame());