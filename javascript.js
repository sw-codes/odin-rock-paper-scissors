function getComputerChoice() {
    computerNum = Math.ceil(Math.random() * 3);
    computerChoice = ""
    switch (computerNum) {
        case (1) :
            computerChoice = "Rock";
            break;
        case (2) :
            computerChoice = "Paper";
            break;
        case (3) :
            computerChoice = "Scissors";
            break;
    }
    console.log(computerChoice);
    return computerChoice;
    
}

getComputerChoice();