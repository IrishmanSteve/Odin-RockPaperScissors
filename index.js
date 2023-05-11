console.log("Welcome to Rock Paper Scissors!");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Making playerSelection case-insensitive
function getPlayerChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt("Invalid input! Please choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Please Enter a Valid Input!";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice(); 
        const result = playRound(playerSelection, computerSelection);
        
        console.log(result);

        if (result.startsWith("You Win")) {
            playerScore++;
        } else if (result.startsWith("You Lose")) {
            computerScore++;
        }
    }
    
    console.clear();
    console.log("Final Score:");
    console.log("Player:", playerScore);
    console.log("Computer", computerScore);
    
    if (playerScore > computerScore) {
        console.log("You win! Congrats!");
    } else if (computerScore > playerScore) {
        console.log("Computer Wins :( Better luck next time!")
    } else console.log("Too close to call! It's a tie!")
}
console.log(playRound(playerSelection, computerSelection));

game();