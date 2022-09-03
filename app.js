const computerPlay = () => {
    const hand = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return (hand[randomNumber]);
}
//computerPlay();
const compare = (pSel, cSel) => {
    if (pSel == "rock" && cSel == "paper") {
        console.log("You Lose!, paper beats rock!");
    } else if (pSel == "scissors" && cSel == "rock") {
        console.log("You Win!, rock beats scissors!");
    } else if (pSel == "paper" && cSel == "scissors") {
        console.log("You lose!, scissors beats paper!");
    } else {
        console.log(`You win, ${pSel} beats ${cSel}`);
    }
}

const main = () => {
    const pSel = prompt().toLowerCase();
    console.log(pSel);
    if (pSel !== "paper" && pSel!=="rock" && pSel !=="scissors") {
        console.log("Invalid Input, input to rock, scissors or paper to play");
        main();
    }

    const cSel = computerPlay();
    if (pSel === cSel) {
        console.log('Draw, replay')
        main();
    } else{
        compare(pSel,cSel);
    }
}
