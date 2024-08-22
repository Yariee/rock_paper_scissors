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
    let userChoice = prompt("Would you like to be rock, paper or scissors?");
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        return userChoice;
    } else {
        alert("You did not choose a correct option!")
    }
}


console.log(getComputerChoice());
console.log(getHumanChoice());