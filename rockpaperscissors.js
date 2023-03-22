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

function draw() {
    const canvas = document.getElementById("arena");
    //canvas size is 600px wide, 300px tall
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.save();
        //arena outline
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(300, 20);
        ctx.lineTo(100, 90);
        ctx.lineTo(100, 210);
        ctx.lineTo(300, 280);
        ctx.lineTo(500, 210);
        ctx.lineTo(500, 90);
        ctx.lineTo(300, 20);
        ctx.clip();
        ctx.stroke();
        ctx.save();

        ctx.moveTo(298, 20);
        ctx.lineWidth = 2;
        ctx.fillStyle = "grey";
        ctx.fillRect(296, 10, 8, 280);

        //center circle
        ctx.strokeStyle = "blue";
        ctx.beginPath();
        ctx.arc(300, 150, 45, 0, 2 * Math.PI, true);
        ctx.stroke();
        
        //left
        ctx.beginPath();
        ctx.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
        // ctx.fill();
        ctx.stroke();

        //far left
        ctx.beginPath();
        ctx.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
        // ctx.fill();
        ctx.stroke();

        //right
        ctx.beginPath();
        ctx.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
        ctx.stroke();

        //far right
        ctx.beginPath();
        ctx.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
        ctx.stroke();

        // //test fill left
        // ctx.beginPath();
        // ctx.arc(100, 150, 120, -Math.PI/2, Math.PI/2, false);
        // ctx.arc(100, 150, 60, Math.PI/2, -Math.PI/2, true);
        // ctx.fill();
        // ctx.closePath();

        //test fill middle left
        ctx.beginPath();
        ctx.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
        ctx.lineTo(300, 280);
        ctx.lineTo(300, 20);
        ctx.lineTo(100, 20);
        ctx.fillStyle = "rgba(204, 255, 204, 0.5)";
        ctx.fill();
        ctx.closePath();

    }
}