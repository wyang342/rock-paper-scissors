
function computerPlay() {
    // random number to determine which one computer shoots out
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else if (num === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    // turns inputs into lowercase for ease
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // uses conditionals to play game
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            tie('paper');
        } else if (computerSelection === "rock") {
            victory('paper', 'rock');
        } else {
            loss('paper', 'scissors');
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            tie('scissors');
        } else if (computerSelection === "paper") {
            victory('scissors', 'paper');
        } else {
            loss('scissors', 'rock')
        }
    } else if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            tie('rock');
        } else if (computerSelection === "scissors") {
            victory('rock', 'scissors');
        } else {
            loss('rock', 'paper');
        }
    }
}

function listenForButton() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id);
        });
    });
};


function tie(selection) {
    const results = document.getElementById('results');
    let result = document.createElement('p')
    result.textContent = `It's a tie. You both shot ${selection}.`;
    results.appendChild(result);
}

function victory(playerSelection, computerSelection) {
    const results = document.getElementById('results');
    let result = document.createElement('p')
    result.textContent = `You win! Computer shot ${computerSelection}. ${playerSelection} beats ${computerSelection}.`;
    results.appendChild(result);
    playerWins++;
    countWins();
}

function loss(playerSelection, computerSelection) {
    const results = document.getElementById('results');
    let result = document.createElement('p')
    result.textContent = `You lose! Computer shot ${computerSelection}. ${playerSelection} loses to ${computerSelection}.`;
    results.appendChild(result);
    computerWins++;
    countWins();
}


listenForButton();

// Counting Wins.
let playerWins = 0, computerWins = 0;
const wins = document.getElementById('numOfWins');
countWins();
function countWins() {
    wins.textContent = `Player Wins: ${playerWins}.\nComputer Wins: ${computerWins}`;
}