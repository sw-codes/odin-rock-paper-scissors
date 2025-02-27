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
    console.log(computerChoice);
    return computerChoice;
    
}

function getHumanChoice() {
    humanChoice = prompt("Choose from rock, paper or scissors and enter.");
    console.log(humanChoice);
    return humanChoice;
}

getComputerChoice();
getHumanChoice();