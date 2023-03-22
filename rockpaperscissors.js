const choices = ["rock", "paper", "scissors"];
let result = 0;
let playerWins = 0;
let computerWins = 0;
let rounds = 0;

// Gets a random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

// Capitalizes first letter in string
function capitalize(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// Initiates a single round
function playRound(playerSelection) {
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection) {
        narrator.textContent = "It's a draw! Try again";
        rounds += 1;
    }
    else if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"
    ) {
        narrator.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        computerWins += 1;
        rounds += 1;
    }
    else {
        narrator.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        playerWins += 1;
        rounds += 1;
    }
    if (rounds == 5) {
        if (computerWins > playerWins)
            narrator.textContent = "You have lost! Computer is the winner";
        else if (computerWins < playerWins)
            narrator.textContent = "You have won!";
        else
            narrator.textContent = "It is a draw";
        buttons.forEach(button => button.disabled = true);
    }
}



const narrator = document.querySelector('#narrator');
narrator.textContent = "Choose your weapon!";

buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', (e) => playRound(e.target.id)));