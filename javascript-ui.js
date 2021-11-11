//create 3 separate buttons for rock, paper, scissor selection
    //attach event listener to the buttons that calls playRound 
    //  function with correct playerSelection when button clicked
    //  and calls computer's randomly generated selection
//create <div> for displaying results
    //convert console.logs into DOM methods
//display running score
//announce winner of game once player reaches 5 points
let selection = ['rock','paper','scissors'];
let message = ['This round is a tie.', 'A victorious round!', 'You lost this round.', 'Not Valid']
let wins = 0;
let losses = 0;
let draw = 0;
let rounds = 0;

function computerPlay() {
    return selection[Math.floor(Math.random()*selection.length)];
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'rock') {
        ++rounds;
        ++draw;
        alert(message[0]);
    }
    else if (computerSelection === 'paper' && playerSelection === 'paper') {
        ++rounds;
        ++draw;
        alert(message[0]);
    }
    else if (computerSelection === 'scissors' && playerSelection === 'scissors') {
        ++rounds;
        ++draw;
        alert(message[0]);
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        ++rounds;
        ++losses;
        alert(message[2]);
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        ++rounds;
        ++wins;
        alert(message[1]);
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock') {
        ++rounds;
        ++losses;
        alert(message[2]);
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        ++rounds;
        ++wins;
        alert(message[1]);
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        ++rounds;
        ++wins;
        alert(message[1]);
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        ++rounds;
        ++losses;
        alert(message[2]);
    }
    else {
        ++rounds;
        alert(message[3]);
    }
    display_rounds.textContent = `Rounds: ${rounds}`;
    display_wins.textContent = `Your wins: ${wins}`;
    display_losses.textContent = `Your losses: ${losses}`;
    display_draw.textContent = `Draw: ${draw}`;
   
}


let display_rounds = document.createElement('h3');
let div = document.querySelector('.scoreboard');
div.appendChild(display_rounds);

let display_wins = document.createElement('h3');
div.appendChild(display_wins);

let display_losses = document.createElement('h3');
div.appendChild(display_losses);

let display_draw = document.createElement('h3');
div.appendChild(display_draw);



let rock_button = document.querySelector("#rock");
rock_button.addEventListener('click', () =>{
    if ((wins<5) && (losses<5)){
        let computerSelection = computerPlay();
        let playerSelection = 'rock';
        playRound(computerSelection, playerSelection);
    }
    else if (losses == 5){
        alert("You lost the game. Refresh webpage to play again.");
    }
    else if (wins == 5){
        alert('You won the game! Refresh webpage to play again.');
    }
});

let paper_button = document.querySelector("#paper");
paper_button.addEventListener('click', () =>{
    if ((wins<5) && (losses<5)){
        let computerSelection = computerPlay();
        let playerSelection = 'paper';
        playRound(computerSelection, playerSelection);
    }
    else if (losses == 5) {
        alert("You lost the game. Refresh webpage to play again.");
    }
    else if (wins == 5){
        alert('You won the game! Refresh webpage to play again.');
    }    
});

let scissors_button = document.querySelector("#scissors");
scissors_button.addEventListener('click', () =>{
    if ((wins<5) && (losses<5)){
        let computerSelection = computerPlay();
        let playerSelection = 'scissors';
        playRound(computerSelection, playerSelection);
    }
    else if (losses == 5){
        alert("You lost the game. Refresh to play again.");
    }
    else if (wins == 5){
        alert('You won the game! Refresh webpage to play again.');
    }
});

