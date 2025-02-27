function getComputerChoice() {
    computerNum = Math.ceil(Math.random() * 3);
    computerChoice = ""
    switch (computerNum) {
        case (1) :
            computerChoice = "rock";
            break;
        case (2) :
            computerChoice = "paper";
            break;
        case (3) :
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Choose from rock, paper or scissors and enter.");
    return humanChoice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let roundCount = 0;

    while (roundCount < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        roundCount++;
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("The machines have won!");
    }
    console.log("Game over.");

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("It's a draw! Nobody wins.");
            roundCount++;
            playRound(getHumanChoice(), getComputerChoice());
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors.");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock.");
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper.");
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
        
    }
}

playGame();