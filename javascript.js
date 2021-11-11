//computer will randomly return either rock, paper, or scissors
let selection = ['rock', 'paper', 'scissors'];
function computerPlay() {
    return selection[Math.floor(Math.random() * selection.length)];
}
//play single round of RPS with player's selection vs. computer's selection

//convert player's selection to standard lower-case
function playerPlay() {
    return prompt("Enter: rock, paper, or scissors").toLowerCase();
}

let message = ['You tied with the computer.', 'You win this time.', 'Haha you lost against a computer.', 'Not Valid']
let wins = 0;
let losses = 0;
let draw = 0;
let rounds = 0;
function playRound() {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    if (computerSelection === 'rock' && playerSelection === 'rock') {
        ++rounds;
        ++draw;
        return message[0];
    }
    else if (computerSelection === 'paper' && playerSelection === 'paper') {
        ++rounds;
        ++draw;
        return message[0];
    }
    else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        ++rounds;
        ++draw;
        return message[0];
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        ++rounds;
        ++losses;
        return message[2];
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        ++rounds;
        ++wins;
        return message[1];
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        ++rounds;
        ++losses;
        return message[2];
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        ++rounds;
        ++wins;
        return message[1];
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        ++rounds;
        ++wins;
        return message[1];
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        ++rounds;
        ++losses;
        return message[2];
    }
    else {
        ++rounds;
        return message[3];
    }
}
function game() {
    console.log(playRound());
    console.log(`Rounds played: ${rounds}.`);
    console.log(`You have ${wins} wins.`)
    console.log(`You have ${losses} losses.`)
    console.log(`You have ${draw} draws.`)
    console.log(playRound());
    console.log(`Rounds played: ${rounds}.`);
    console.log(`You have ${wins} wins.`)
    console.log(`You have ${losses} losses.`)
    console.log(`You have ${draw} draws.`)
    console.log(playRound());
    console.log(`Rounds played: ${rounds}.`);
    console.log(`You have ${wins} wins.`)
    console.log(`You have ${losses} losses.`)
    console.log(`You have ${draw} draws.`)
    console.log(playRound());
    console.log(`Rounds played: ${rounds}.`);
    console.log(`You have ${wins} wins.`)
    console.log(`You have ${losses} losses.`)
    console.log(`You have ${draw} draws.`)
    console.log(playRound());
    console.log(`Rounds played: ${rounds}.`);
    console.log(`You have ${wins} wins.`)
    console.log(`You have ${losses} losses.`)
    console.log(`You have ${draw} draws.`)
    if (wins > losses) {
        console.log('You won the game!')
    }
    else if (wins < losses) {
        console.log('You lost the game.')
    }
    else {
        console.log('This game is a draw.')
    }
}
//declare winner of that single round with a message
game();
//play five single rounds of RPS


    //keep track of score
    //report winner or loser at the end
