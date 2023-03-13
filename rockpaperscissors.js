const choices = ["Rock", "Paper", "Scissors"];
let playerSelection;
let computerSelection;

// Gets a random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

// Prompts player for choice. Re-prompts if choice is invalid.
function getPlayerChoice() {
    let validInput = false;
    while(!validInput) {
        playerSelection = prompt("Choose your weapon!");
        validInput = choices.includes(capitalize(playerSelection));
    }
    return playerSelection;
}

// Initiates a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        console.log("It's a draw! Try again");
        return 0;
    }
    else if (
        playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock"
    ) {
        console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
        return -1;
    }
    else {
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
        return 1;
    }
}

// Starts a game of five rounds
function game(handicap = 0) {
    let result = 0;
    let playerWins = handicap;
    let computerWins = 0;
    
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if (result == -1)
            computerWins += 1;
        else if (result == 1)
            playerWins += 1;
    }
    if (computerWins > playerWins)
        console.log("You have lost! Computer is the winner");
    else if (computerWins < playerWins)
        console.log("You have won!");
    else
        console.log("It is a draw")
}

function capitalize(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

game();