let comScore = 0;
let playerScore =0;
let gameRound = 1;

const computerPlay = () => {
    const hand = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return (hand[randomNumber]);
}
//computerPlay();
const compare = (pSel, cSel) => {
    if (pSel == "rock" && cSel == "paper") {
        console.log("You Lose!, paper beats rock!");
        comScore++;
    } else if (pSel == "scissors" && cSel == "rock") {
        console.log("You Win!, rock beats scissors!");
        comScore++;
    } else if (pSel == "paper" && cSel == "scissors") {
        console.log("You lose!, scissors beats paper!");
        comScore++;
    } else {
        console.log(`You win, ${pSel} beats ${cSel}`);
        playerScore++;
    }
    gameRound++;
}

const main = () => {
    const pSel = prompt().toLowerCase();
    //console.log(pSel);
    if (pSel !== "paper" && pSel !== "rock" && pSel !== "scissors") {
        console.log("Invalid Input, input to rock, scissors or paper to play");
        main();
    }

    const cSel = computerPlay();
    if (pSel === cSel) {
        console.log('Draw, replay')
        main();
    } else {
        compare(pSel, cSel);
    }
}
const play=()=>{
    while (gameRound<5){
        main();
    }
    if(playerScore==comScore){
        main();
    }else if(playerScore>comScore){
        alert("You win!");
    }else{
        alert("computer wins!");
    }
}