////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

        if (move == 'rock') {
            return 'rock';
        } else if (move == 'paper') {
            return 'paper';
        } else if (move == 'scissors') {
            return 'scissors'
        } else if (move === null) {
            return getInput();
        } else if (move === undefined) {
            return getInput();
        }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        if (move == 'rock') {
            return 'rock';
        } else if (move == 'paper') {
            return 'paper';
        } else if (move == 'scissors') {
            return 'scissors'
        } else if (move === null) {
            return getInput();
        } else if (move === undefined) {
            return getInput();
        }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if (playerMove === computerMove) {
        return (winner = 'Tie');
    } 

    else if (playerMove == 'rock') {
        if (computerMove == 'paper') {
            return (winner = 'computer');
        } else return (winner = 'player');
    }

    else if (playerMove == 'paper') {
        if (computerMove == 'rock') {
            return (winner = 'player');
        } else return (winner = 'computer');
    }

    else if (playerMove == 'scissors') {
        if (computerMove == 'rock') {
            return (winner = 'computer');
        } else return (winner = 'player');
    }

    else return (winner = 'not determined');
}
    


function playToFive() {

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    while ((playerWins < 5) && (computerWins < 5)) {
        var player = getPlayerMove (getInput ());
            console.log ('Player move: ' + player);

        var computer = getComputerMove (randomPlay());
            console.log ('Computer move: ' + computer);

        var results = getWinner (player, computer);

            if (results == 'player') {
                playerWins += 1;
                console.log ('Player Wins!');
            } else if (results == 'computer') {
                computerWins += 1;
                console.log ('Computer Wins!');
            } else if (results == 'Tie') {
                console.log ('Tie!');
            }
            
            console.log ('Player # Wins: ' + playerWins);
            console.log ('Computer # Wins: ' + computerWins);

    }

    return ['Player # Total Wins: ' + playerWins, 'Computer # Total Wins: ' + computerWins];
}

playToFive ();


