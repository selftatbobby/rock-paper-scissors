//computer will randomly return either rock, paper, or scissors
let selection = ['rock','paper','scissors'];
function computerPlay(){
    return selection[Math.floor(Math.random()*selection.length)];
}
//play single round of RPS with player's selection vs. computer's selection

//convert player's selection to standard lower-case
function playerPlay(){
    return prompt("Enter: rock, paper, or scissors").toLowerCase();
}

let message = ['it\'s a draw','you win','you lose','not valid']
function playRound(){
    const computerSelection = computerPlay();
    console.log(computerSelection);
    const playerSelection = playerPlay();
    console.log(playerSelection);
    if (computerSelection === 'rock' && playerSelection === 'rock'){
        return message[0];
    }    
    else if (computerSelection === 'paper' && playerSelection === 'paper'){
        return message[0];
    }
    else if (computerSelection === 'scissors' && playerSelection === 'scissors'){
        return message[0];
    } 
    else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        return message[2];
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper'){
        return message[1];
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock'){
        return message[2];
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        return message[1];
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        return message[1];
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        return message[2];
    }
    else {return message[3];}
}

//declare winner of that single round with a message

//play five single rounds of RPS


    //keep track of score
    //report winner or loser at the end
let rounds = 0;
function game(){
    if (playRound() === message[0] || message[1] || message[2]){
        rounds++;
        console.log(playRound());
        return `you've played ${rounds} rounds`;
    }
}
playRound();
game();
playRound();
game();
playRound();
game();
playRound();
game();
playRound();
game();
console.log(game());