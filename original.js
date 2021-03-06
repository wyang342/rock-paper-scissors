function computerPlay() {
    // random number to determine which one computer shoots out
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    // turns inputs into lowercase for ease
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // uses conditionals to play game
    if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return "Tie"
        } else if (computerSelection === "rock") {
            return "You win! Computery shot rock. Paper beats Rock."
        } else {
            return "You lose! Computery shot scissors. Scissors beats Paper."
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return "Tie"
        } else if (computerSelection === "paper") {
            return "You win! Computery shot paper. Scissors beats Paper."
        } else {
            return "You lose! Computery shot rock. Rock beats Scissors."
        }
    } else if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "Tie"
        } else if (computerSelection === "scissors") {
            return "You win! Computery shot scissors. Rock beats Scissors."
        } else {
            return "You lose! Computery shot paper. Paper beats Rock."
        }
    }
}

function game() {
    let count, playerWins = 0, computerWins = 0;
    // for loop to play game 5 times
    for (count = 0; count < 5; count++) {
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        alert(result);

        // counting wins of player & computer
        if (result.includes("Tie")) {
            // pass
        } else if (result.includes("You win")) {
            playerWins++;
        } else {
            computerWins++;
        }



    }
    if (playerWins > computerWins) {
        console.log("The winner is you!");
        alert("The winner is you!");
    } else if (playerWins < computerWins) {
        console.log("The winner is computery!;");
        alert("The winner is computery!");
    } else {
        console.log("Tie. Boring!");
        alert("Tie. Boring!");
    }
}

game()