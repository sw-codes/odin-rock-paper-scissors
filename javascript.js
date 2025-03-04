function getComputerChoice() {
    computerNum = Math.ceil(Math.random() * 3);
    computerChoice = ""
    switch (computerNum) {
        case (1):
            computerChoice = "rock";
            break;
        case (2):
            computerChoice = "paper";
            break;
        case (3):
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let resultDiv = document.getElementById("resultDiv");

    let buttons = document.querySelectorAll("button");
    buttons.forEach((item) => {
        item.addEventListener("click", () => {
            playRound(item.textContent, getComputerChoice());
        })
    })

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanScore == 5) {
            let winPara = document.createElement("p");
            winPara.textContent = "You have won the game!";
            resultDiv.appendChild(winPara);
            const scorePara = document.createElement("p");
            scorePara.textContent = `You: ${humanScore} The Machines: ${computerScore}`;
            resultDiv.appendChild(scorePara);
            return;
        }
        if (computerScore == 5) {
            let winPara = document.createElement("p");
            winPara.textContent = "The Machines won the game!";
            resultDiv.appendChild(winPara);
            const scorePara = document.createElement("p");
            scorePara.textContent = `You: ${humanScore} The Machines: ${computerScore}`;
            resultDiv.appendChild(scorePara);
            return;
        }

        if (humanChoice == computerChoice) {
            const para = document.createElement("p");
            para.textContent = "It's a draw! Nobody wins.";
            resultDiv.appendChild(para);

        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            const para = document.createElement("p");
            para.textContent = "You win! Rock beats Scissors.";
            resultDiv.appendChild(para);
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            const para = document.createElement("p");
            para.textContent = "You win! Paper beats Rock.";
            resultDiv.appendChild(para);
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            const para = document.createElement("p");
            para.textContent = "You win! Scissors beats Paper.";
            resultDiv.appendChild(para);
        } else {
            computerScore++;
            const para = document.createElement("p");
            para.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
            resultDiv.appendChild(para);
        }

    }
}

playGame();