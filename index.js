console.log("Welcome to Rock Paper Scissors!");

const choices = ["rock", "paper", "scissors"];
let playerSelection = "";
let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".btn");

const player = document.querySelector("#playerScore");
const computer = document.querySelector("#computerScore");
const output = document.querySelector("#context");

output.textContent = "Choose Your Weapon!";

function updateScore() {
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
}

updateScore();

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (playerScore > 4 || computerScore > 4) {
            playAgain.style.display = "inline-block";
            return;
        }

        playerSelection = button.id;
        output.textContent = "";
        game(playerSelection);

        if (playerScore > 4 || computerScore > 4) {
            playAgain.style.display = "inline-block";
        }
    });
});

const playAgain = document.querySelector("#reset");

playAgain.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    output.textContent = "Choose Rock Paper or Scissors";
    if (playerScore < 5 || computerScore < 5) {
        playAgain.style.display = "none";
    }
});

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        result = "You Win!";
        playerScore++;
    } else {
        result = "You Lose!";
        computerScore++;
    }

    result += "\n\nYou chose " + playerSelection + " and the computer chose " + computerSelection;

    return result;
}

function game () {
    const computerSelection = getComputerChoice(); 
    const result = playRound(playerSelection, computerSelection);
    
    updateScore();
    output.textContent = result;
    
    if (playerScore >= 5) {
        output.textContent = "You win! :D Congratulations!";
    } else if (computerScore >= 5) {
        output.textContent = "Computer Wins :( Better luck next time!";
    }
    return;
}
