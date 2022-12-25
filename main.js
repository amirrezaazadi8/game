
const userChose = prompt("Please choose (rock ,paper or scissor)");

if (userChose === "" || userChose === null) {
    console.log(`Please enter your chose!`);
} else if (userChose === 'rock' || userChose === 'paper' || userChose === 'scissor') {
    console.log(`Your chose is ${userChose}`);
} else {
    console.log(`Please enter your chose correctly`);
}

const choose = ['rock', 'paper', 'scissor'];
const indexNumber = Math.floor(Math.random() * 3);
const ComputerChose = choose[indexNumber];

if (ComputerChose === 'rock') {
    console.log(`computer chose is rock`)
} else if (ComputerChose === 'paper') {
    console.log(`computer chose is paper`)
} else {
    console.log(`computer chose is scissor`)
}

if (ComputerChose === userChose) {
    console.log(`You are equal in the game!`);
} else if (userChose === "rock") {
    if (ComputerChose === "paper") {
        console.log(`You lost the game!`);
    } else {
        console.log(`You won the game!`);
    }
} else if (userChose === "paper") {
    if (ComputerChose === "rock") {
        console.log(`You won the game!`);
    } else {
        console.log(`You lost the game!`);
    }
} else if (userChose === "scissor") {
    if (ComputerChose === "paper") {
        console.log(`You won the game!`);
    } else {
        console.log(`You lost the game!`);
    }
}
