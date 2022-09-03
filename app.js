let comScore = 0;
let playerScore = 0;
let gameRound = 1;

const computerPlay = () => {
    const hand = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return (hand[randomNumber]);
}
//computerPlay();
const compare = (pSel, cSel) => {
     {
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
    
}

const main = () => {
    let pSel = prompt().toLowerCase();
    //console.log(pSel);
    if (pSel !== "paper" && pSel !== "rock" && pSel !== "scissors") {
        console.log("Invalid Input, input to rock, scissors or paper to play");
        //main();
    }
    let cSel = computerPlay();
    if (pSel === cSel) {
        console.log('Draw, replay')
        //main();
    } else if (pSel === "rock" || pSel === "paper" || pSel === "scissors"){
        compare(pSel, cSel);
    }
}
const play = () => {
    while (gameRound < 5) {
        main();
        gameRound++;
        console.log(`player score = ${playerScore}, computer score = ${comScore}`)
    }
    if (gameRound == 5) {
        if (playerScore > comScore) {
            alert("You win!");
        } else {
            alert("computer wins!");
        }
    }

}