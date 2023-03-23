const choices = ["water", "earth", "fire", "air"];
const canvas = document.getElementById("arena");
let result = 0;
let score = 0;
let rounds = 0;

// Gets a random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random()*4)];
}

// Capitalizes first letter in string
function capitalize(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// Initiates a single round
function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    const ctx = canvas.getContext("2d");
    ctx.globalAlpha = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (playerSelection == computerSelection ||
        playerSelection == "water" && computerSelection == "fire" ||
        playerSelection == "fire" && computerSelection == "water" ||
        playerSelection == "air" && computerSelection == "earth" ||
        playerSelection == "earth" && computerSelection == "air"
        ) {
        narrator.textContent = "It's a draw! Try again";
        rounds += 1;
    }
    else if (
        playerSelection == "water" && computerSelection == "earth" ||
        playerSelection == "earth" && computerSelection == "fire" ||
        playerSelection == "fire" && computerSelection == "air" ||
        playerSelection == "air" && computerSelection == "water"
    ) {
        narrator.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
        score += 1;
        rounds += 1;
    }
    else {
        narrator.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
        score -= 1;
        rounds += 1;
    }
    if (score == 0) {
        ctx.drawImage(score0, 0, 0);
    }
    else if (score == 1) {
        ctx.drawImage(score1, 0, 0);
    }
    else if (score == 2) {
        ctx.drawImage(score2, 0, 0);
    }
    else if (score == -1) {
        ctx.drawImage(score1n, 0, 0);
    }
    else if (score == -2) {
        ctx.drawImage(score2n, 0, 0);
    }

    if (score > 2) {
        narrator.textContent = "You have won!";
        ctx.drawImage(score3, 0, 0);
    }
    else if (score < -2) {
        narrator.textContent = "You have lost! Computer is the winner"
        ctx.drawImage(score3n, 0, 0);
    }
    else if (rounds > 10) {
        narrator.textContent = "It is a draw. Initiating tie breaker!";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(scoretie, 0, 0);
        
        // buttons.forEach(button => button.disabled = true);
    }
}



const narrator = document.querySelector('#narrator');
narrator.textContent = "Choose your weapon!";

const containers = document.querySelectorAll(".element-container");
containers.forEach(container => container.addEventListener('mouseover', (e) => mouseOver(e)));
containers.forEach(container => container.addEventListener('mouseout', (e) => mouseOut(e)));

const buttons = document.querySelectorAll(".element-image");
buttons.forEach(button => button.addEventListener('mouseover', (e) => mouseOver(e)));
buttons.forEach(button => button.addEventListener('mouseout', (e) => mouseOut(e)));
buttons.forEach(button => button.addEventListener('click', (e) => playRound(e.target.id)));

function mouseOver(e) {
    let elementsWrapper = document.querySelector(".elements-wrapper");
    if (e.target.className.includes('water')) {
        elementsWrapper.style.borderColor = "blue";
    }
    else if (e.target.className.includes('earth')) {
        elementsWrapper.style.borderColor = "green";
    }
    else if (e.target.className.includes('fire')) {
        elementsWrapper.style.borderColor = "red";
    }
    else if (e.target.className.includes('air')) {
        elementsWrapper.style.borderColor = "lightblue";
    }
}

function mouseOut(e) {
    let elementsWrapper = document.querySelector(".elements-wrapper");
    elementsWrapper.style.borderColor = "black";

}

function draw() {
    //canvas size is 600px wide, 300px tall
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")
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
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.stroke();
        ctx.save();

        ctx.moveTo(298, 20);
        ctx.lineWidth = 2;
        ctx.fillStyle = "grey";
        ctx.fillRect(296, 10, 8, 280);

        //center circle
        ctx.strokeStyle = "grey";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(300, 150, 45, 0, 2 * Math.PI, true);
        ctx.stroke();
        
        //left
        ctx.beginPath();
        ctx.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
        ctx.stroke();

        //far left
        ctx.beginPath();
        ctx.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
        ctx.stroke();

        //right
        ctx.beginPath();
        ctx.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
        ctx.stroke();

        //far right
        ctx.beginPath();
        ctx.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
        ctx.stroke();
        ctx.closePath();

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = 'red';
        ctx.fillRect(100, 20, 200, 300);
        ctx.fillStyle = 'blue'
        ctx.fillRect(300, 20, 200, 300);
        ctx.closePath();
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at score = 0
let score0 = document.createElement("canvas");
score0.width = canvas.width;
score0.height = canvas.height;
let ctx0 = score0.getContext("2d");
ctx0.save();
//arena outline
ctx0.lineWidth = 5;
ctx0.strokeStyle = "black";
ctx0.beginPath();
ctx0.moveTo(300, 20);
ctx0.lineTo(100, 90);
ctx0.lineTo(100, 210);
ctx0.lineTo(300, 280);
ctx0.lineTo(500, 210);
ctx0.lineTo(500, 90);
ctx0.lineTo(300, 20);
ctx0.clip();
ctx0.fillStyle = "white";
ctx0.fill();
ctx0.stroke();
ctx0.save();

ctx0.moveTo(298, 20);
ctx0.lineWidth = 2;
ctx0.fillStyle = "grey";
ctx0.fillRect(296, 10, 8, 280);

//center circle
ctx0.strokeStyle = "grey";
ctx0.lineWidth = 4;
ctx0.beginPath();
ctx0.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx0.stroke();

//left
ctx0.beginPath();
ctx0.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctx0.stroke();

//far left
ctx0.beginPath();
ctx0.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctx0.stroke();

//right
ctx0.beginPath();
ctx0.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx0.stroke();

//far right
ctx0.beginPath();
ctx0.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx0.stroke();
ctx0.closePath();

ctx0.globalAlpha = 0.5;
ctx0.fillStyle = 'red';
ctx0.fillRect(100, 20, 200, 300);
ctx0.fillStyle = 'blue'
ctx0.fillRect(300, 20, 200, 300);
ctx0.closePath();

//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at score = 1
let score1 = document.createElement("canvas");
score1.width = canvas.width;
score1.height = canvas.height;
let ctx1 = score1.getContext("2d");
ctx1.save();
//arena outline
ctx1.lineWidth = 5;
ctx1.strokeStyle = "black";
ctx1.beginPath();
ctx1.moveTo(300, 20);
ctx1.lineTo(100, 90);
ctx1.lineTo(100, 210);
ctx1.lineTo(300, 280);
ctx1.lineTo(500, 210);
ctx1.lineTo(500, 90);
ctx1.lineTo(300, 20);
ctx1.globalAlpha = 1;
ctx1.clip();
ctx1.fillStyle = "white";
ctx1.fill();
ctx1.stroke();
ctx1.save();

ctx1.moveTo(298, 20);
ctx1.lineWidth = 2;
ctx1.fillStyle = "grey";
ctx1.fillRect(296, 10, 8, 280);

//center circle
ctx1.strokeStyle = "grey";
ctx1.lineWidth = 4;
ctx1.beginPath();
ctx1.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx1.stroke();

//left
ctx1.beginPath();
ctx1.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctx1.stroke();

//far left
ctx1.beginPath();
ctx1.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctx1.stroke();

//right
ctx1.beginPath();
ctx1.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx1.stroke();

//far right
ctx1.beginPath();
ctx1.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx1.stroke();
ctx1.closePath();

//fill red territory
ctx1.globalAlpha = 0.5;
ctx1.beginPath();
ctx1.fillStyle = 'red';
ctx1.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx1.lineTo(100, 0);
ctx1.lineTo(100, 300);
ctx1.lineTo(500, 300);
ctx1.fill();
ctx1.closePath();

//fill blue territory
ctx1.beginPath();
ctx1.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx1.fillStyle = 'blue'
ctx1.fill();
ctx1.closePath();


//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at score = 2
let score2 = document.createElement("canvas");
score2.width = canvas.width;
score2.height = canvas.height;
const ctx2 = score2.getContext("2d")
ctx2.save();
//arena outline
ctx2.lineWidth = 5;
ctx2.strokeStyle = "black";
ctx2.beginPath();
ctx2.moveTo(300, 20);
ctx2.lineTo(100, 90);
ctx2.lineTo(100, 210);
ctx2.lineTo(300, 280);
ctx2.lineTo(500, 210);
ctx2.lineTo(500, 90);
ctx2.lineTo(300, 20);
ctx2.clip();
ctx2.fillStyle = "white";
ctx2.fill();
ctx2.stroke();
ctx2.save();

ctx2.moveTo(298, 20);
ctx2.lineWidth = 2;
ctx2.fillStyle = "grey";
ctx2.fillRect(296, 10, 8, 280);

//center circle
ctx2.strokeStyle = "grey";
ctx2.lineWidth = 4;
ctx2.beginPath();
ctx2.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx2.stroke();

//left
ctx2.beginPath();
ctx2.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
// ctx2.fill();
ctx2.stroke();

//far left
ctx2.beginPath();
ctx2.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
// ctx2.fill();
ctx2.stroke();

//right
ctx2.beginPath();
ctx2.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx2.stroke();

//far right
ctx2.beginPath();
ctx2.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx2.stroke();
ctx2.closePath();

//fill red territory
ctx2.globalAlpha = 0.5;
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx2.lineTo(500, 0);
ctx2.lineTo(100, 0);
ctx2.lineTo(100, 300);
ctx2.lineTo(500, 300);
ctx2.fill();
ctx2.closePath();

//fill blue territory
ctx2.beginPath();
ctx2.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx2.fillStyle = 'blue'
ctx2.fill();
ctx2.closePath();


//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at score = -1
let score1n = document.createElement("canvas");
score1n.width = canvas.width;
score1n.height = canvas.height;
const ctx1n = score1n.getContext("2d")
ctx1n.save();
//arena outline
ctx1n.lineWidth = 5;
ctx1n.strokeStyle = "black";
ctx1n.beginPath();
ctx1n.moveTo(300, 20);
ctx1n.lineTo(100, 90);
ctx1n.lineTo(100, 210);
ctx1n.lineTo(300, 280);
ctx1n.lineTo(500, 210);
ctx1n.lineTo(500, 90);
ctx1n.lineTo(300, 20);
ctx1n.clip();
ctx1n.fillStyle = "white";
ctx1n.fill();
ctx1n.stroke();
ctx1n.save();

ctx1n.moveTo(298, 20);
ctx1n.lineWidth = 2;
ctx1n.fillStyle = "grey";
ctx1n.fillRect(296, 10, 8, 280);

//center circle
ctx1n.strokeStyle = "grey";
ctx1n.lineWidth = 4;
ctx1n.beginPath();
ctx1n.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx1n.stroke();

//left
ctx1n.beginPath();
ctx1n.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
// ctx1n.fill();
ctx1n.stroke();

//far left
ctx1n.beginPath();
ctx1n.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
// ctx1n.fill();
ctx1n.stroke();

//right
ctx1n.beginPath();
ctx1n.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx1n.stroke();

//far right
ctx1n.beginPath();
ctx1n.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx1n.stroke();
ctx1n.closePath();

ctx1n.globalAlpha = 0.5;
//fill red territory
ctx1n.beginPath();
ctx1n.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctx1n.fillStyle = 'red'
ctx1n.fill();
ctx1n.closePath();

//fill blue territory
ctx1n.beginPath();
ctx1n.fillStyle = 'blue';
ctx1n.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctx1n.lineTo(100, 300);
ctx1n.lineTo(500, 300);
ctx1n.lineTo(500, 0);
ctx1n.lineTo(100, 0);
ctx1n.fill();
ctx1n.closePath();


//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at score = -2
let score2n = document.createElement("canvas");
score2n.width = canvas.width;
score2n.height = canvas.height;
const ctx2n = score2n.getContext("2d")
ctx2n.save();
//arena outline
ctx2n.lineWidth = 5;
ctx2n.strokeStyle = "black";
ctx2n.beginPath();
ctx2n.moveTo(300, 20);
ctx2n.lineTo(100, 90);
ctx2n.lineTo(100, 210);
ctx2n.lineTo(300, 280);
ctx2n.lineTo(500, 210);
ctx2n.lineTo(500, 90);
ctx2n.lineTo(300, 20);
ctx2n.clip();
ctx2n.fillStyle = "white";
ctx2n.fill();
ctx2n.stroke();
ctx2n.save();

ctx2n.moveTo(298, 20);
ctx2n.lineWidth = 2;
ctx2n.fillStyle = "grey";
ctx2n.fillRect(296, 10, 8, 280);

//center circle
ctx2n.strokeStyle = "grey";
ctx2n.lineWidth = 4;
ctx2n.beginPath();
ctx2n.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx2n.stroke();

//left
ctx2n.beginPath();
ctx2n.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
// ctx2n.fill();
ctx2n.stroke();

//far left
ctx2n.beginPath();
ctx2n.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
// ctx2n.fill();
ctx2n.stroke();

//right
ctx2n.beginPath();
ctx2n.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx2n.stroke();

//far right
ctx2n.beginPath();
ctx2n.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx2n.stroke();
ctx2n.closePath();

ctx2n.globalAlpha = 0.5;

//fill red territory
ctx2n.beginPath();
ctx2n.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctx2n.fillStyle = 'red'
ctx2n.fill();
ctx2n.closePath();

//fill blue territory
ctx2n.beginPath();
ctx2n.fillStyle = 'blue';
ctx2n.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctx2n.lineTo(100, 300);
ctx2n.lineTo(500, 300);
ctx2n.lineTo(500, 0);
ctx2n.lineTo(100, 0);
ctx2n.fill();
ctx2n.closePath();


//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at win
let score3 = document.createElement("canvas");
score3.width = canvas.width;
score3.height = canvas.height;
let ctx3 = score3.getContext("2d");
ctx3.save();
//arena outline
ctx3.lineWidth = 5;
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(300, 20);
ctx3.lineTo(100, 90);
ctx3.lineTo(100, 210);
ctx3.lineTo(300, 280);
ctx3.lineTo(500, 210);
ctx3.lineTo(500, 90);
ctx3.lineTo(300, 20);
ctx3.clip();
ctx3.fillStyle = "white";
ctx3.fill();
ctx3.stroke();
ctx3.save();

ctx3.moveTo(298, 20);
ctx3.lineWidth = 2;
ctx3.fillStyle = "grey";
ctx3.fillRect(296, 10, 8, 280);

//center circle
ctx3.strokeStyle = "grey";
ctx3.lineWidth = 4;
ctx3.beginPath();
ctx3.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx3.stroke();

//left
ctx3.beginPath();
ctx3.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctx3.stroke();

//far left
ctx3.beginPath();
ctx3.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctx3.stroke();

//right
ctx3.beginPath();
ctx3.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx3.stroke();

//far right
ctx3.beginPath();
ctx3.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx3.stroke();
ctx3.closePath();

//fill red territory
ctx3.beginPath();
ctx3.globalAlpha = 0.5;
ctx3.fillStyle = 'red';
ctx3.fillRect(0, 0, 600, 300);
ctx3.closePath();


//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at lose
let score3n = document.createElement("canvas");
score3n.width = canvas.width;
score3n.height = canvas.height;
let ctx3n = score3n.getContext("2d");
ctx3n.save();
//arena outline
ctx3n.lineWidth = 5;
ctx3n.strokeStyle = "black";
ctx3n.beginPath();
ctx3n.moveTo(300, 20);
ctx3n.lineTo(100, 90);
ctx3n.lineTo(100, 210);
ctx3n.lineTo(300, 280);
ctx3n.lineTo(500, 210);
ctx3n.lineTo(500, 90);
ctx3n.lineTo(300, 20);
ctx3n.clip();
ctx3n.fillStyle = "white";
ctx3n.fill();
ctx3n.stroke();
ctx3n.save();

ctx3n.moveTo(298, 20);
ctx3n.lineWidth = 2;
ctx3n.fillStyle = "grey";
ctx3n.fillRect(296, 10, 8, 280);

//center circle
ctx3n.strokeStyle = "grey";
ctx3n.lineWidth = 4;
ctx3n.beginPath();
ctx3n.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctx3n.stroke();

//left
ctx3n.beginPath();
ctx3n.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctx3n.stroke();

//far left
ctx3n.beginPath();
ctx3n.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctx3n.stroke();

//right
ctx3n.beginPath();
ctx3n.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctx3n.stroke();

//far right
ctx3n.beginPath();
ctx3n.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctx3n.stroke();
ctx3n.closePath();

ctx3n.globalAlpha = 0.5;
//fill blue territory
ctx3n.beginPath();
ctx3n.fillStyle = 'blue'
ctx3n.fillRect(0, 0, 600, 300);
ctx3n.closePath();

//////////////////////////////////////////////////////////////////////////////////////////////////
//defining arena state at tie
let scoretie = document.createElement("canvas");
scoretie.width = canvas.width;
scoretie.height = canvas.height;
let ctxtie = scoretie.getContext("2d");
ctxtie.save();
//arena outline
ctxtie.lineWidth = 5;
ctxtie.strokeStyle = "black";
ctxtie.beginPath();
ctxtie.moveTo(300, 20);
ctxtie.lineTo(100, 90);
ctxtie.lineTo(100, 210);
ctxtie.lineTo(300, 280);
ctxtie.lineTo(500, 210);
ctxtie.lineTo(500, 90);
ctxtie.lineTo(300, 20);
ctxtie.clip();
ctxtie.fillStyle = "white";
ctxtie.fill();
ctxtie.stroke();
ctxtie.save();

ctxtie.moveTo(298, 20);
ctxtie.lineWidth = 2;
ctxtie.fillStyle = "grey";
ctxtie.fillRect(296, 10, 8, 280);

//center circle
ctxtie.strokeStyle = "grey";
ctxtie.lineWidth = 4;
ctxtie.beginPath();
ctxtie.arc(300, 150, 45, 0, 2 * Math.PI, true);
ctxtie.stroke();

//left
ctxtie.beginPath();
ctxtie.arc(100, 150, 120, -Math.PI/2, Math.PI/2);
ctxtie.stroke();

//far left
ctxtie.beginPath();
ctxtie.arc(100, 150, 60, -Math.PI/2, Math.PI/2);
ctxtie.stroke();

//right
ctxtie.beginPath();
ctxtie.arc(500, 150, 120, Math.PI/2, 3*Math.PI/2);
ctxtie.stroke();

//far right
ctxtie.beginPath();
ctxtie.arc(500, 150, 60, Math.PI/2, 3*Math.PI/2);
ctxtie.stroke();
ctxtie.closePath();

ctxtie.globalAlpha = 0.5;

//fill red territory
ctxtie.beginPath();
ctxtie.fillStyle = 'red'
ctxtie.moveTo(300, 195);
ctxtie.arc(300, 150, 45, Math.PI/2, 3*Math.PI/2);
ctxtie.lineTo(300, 195);
ctxtie.fill();
ctxtie.closePath();


//fill blue territory
ctxtie.beginPath();
ctxtie.fillStyle = 'blue'
ctxtie.moveTo(300, 195);
ctxtie.arc(300, 150, 45, -Math.PI/2, Math.PI/2);
ctxtie.lineTo(300, 105);
ctxtie.fill();
ctxtie.closePath();