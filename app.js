const computer = document.getElementById('computer');
const player = document.getElementById('player');
const comScoreDisplay = document.getElementById('comScore');
const playerScoreDisplay = document.getElementById('playerScore');
const gameButtons = document.getElementById('game');
const scorePanel = document.getElementById('score-panel');
const playerIcon = document.getElementById('player_Icon');
const comIcon = document.getElementById('computer_Icon');
const restart = document.getElementById('restart');
const leftRock = '<i class="fa-solid fa-hand-back-fist fa-5x fa-rotate-270"></i>';
const rightRock = '<i class="fa-solid fa-hand-back-fist fa-5x fa-rotate-90"></i>';
const paper = '<i class="fa-solid fa-hand fa-5x"></i>';
const leftScissors = '<i class="fa-solid fa-hand-scissors fa-5x"></i>';
const rightScissors = '<i class="fa-solid fa-hand-scissors fa-5x fa-flip-horizontal"></i>';
const scores = document.getElementById('score');
let gameOver = false;
let comScore = 0;
let playerScore = 0;
let gameRound = 1;
let pSel, cSel;

const checkWin = () => {
    if (playerScore == 5) {
        gameOver = true;
        scorePanel.textContent = 'You Win! Congratulations!!';
        scorePanel.classList.add('winner');
        restart.innerText = 'New Game';
        restart.style.color='#2c6cadf3';

    } else if (comScore == 5) {
        gameOver = true;
        scorePanel.textContent = 'You Lost:(';
        scorePanel.classList.add('loser');
        restart.innerText = 'New Game';
        restart.style.color='#2c6cadf3';
    } else {
        gameOver = false;
        restart.style.color='#ef565c';
    }
}
const compare = () => {
    if (pSel !== cSel) {
        if (pSel == "rock" && cSel == "paper") {
            //console.log("You Lose!, paper beats rock!");
            comScore++;
        } else if (pSel == "scissors" && cSel == "rock") {
            //console.log("You lose!, rock beats scissors!");
            comScore++;
        } else if (pSel == "paper" && cSel == "scissors") {
            //console.log("You lose!, scissors beats paper!");
            comScore++;
        } else {
            //console.log(`You win, ${pSel} beats ${cSel}`);
            playerScore++;
        }
    }
}
const computerPlay = () => {
    const hand = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return (hand[randomNumber]);
}
const displayIcons = () => {
    if (cSel == 'scissors') {
        comIcon.innerHTML = rightScissors;
    }
    if (pSel == 'scissors') {
        playerIcon.innerHTML = leftScissors;
    }
    if (pSel == 'rock') {
        playerIcon.innerHTML = leftRock;
    }
    if (cSel == 'rock') {
        comIcon.innerHTML = rightRock;
    }
    if (cSel == 'paper') {
        comIcon.innerHTML = paper;
    }
    if (pSel == 'paper') {
        playerIcon.innerHTML = paper;
    }
}
const updateScore = () => {
    comScoreDisplay.textContent = `${comScore}`;
    playerScoreDisplay.textContent = `${playerScore}`;
    checkWin();
}
const selectOption = (event) => {
    if (gameOver == false) {
        cSel = computerPlay();
        switch (event.target.id) {
            case 'scissors':
                pSel = 'scissors';
                displayIcons();
                compare();
                updateScore();
                break;
            case 'rock':
                pSel = 'rock';

                displayIcons();
                compare();
                updateScore();
                break;
            case 'paper':
                pSel = 'paper';
                displayIcons();
                compare();
                updateScore();
                break;
        }
    }
}
const refresh = () => {
    if (gameOver == true) {
        restart.innerText = 'Restart';
        scorePanel.classList.remove('loser');
        scorePanel.classList.remove('winner');
        scorePanel.textContent = '';
        scorePanel.appendChild(scores);
    }
    gameOver = false;
    comScore = 0;
    playerScore = 0;
    updateScore();
}
gameButtons.addEventListener('click', selectOption);
restart.addEventListener('click', refresh);