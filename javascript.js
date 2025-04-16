console.log("Hello World!")
/* 
Step 2: Write the logic to get the computer choice
Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can
use this to conditionally return one of the multiple choices.
Note: Some learners might think that arrays are necessary for this problem, but they aren’t. If you’re unfamiliar with arrays,
don’t worry - they’ll be covered later in the curriculum.
Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
*/

// Create new function getComputerChoice that randomly returns string values: "rock", "paper" or "scissors"
function getComputerChoice() {
    // Generate random number between 1 and 3
    const number = Math.floor(Math.random() * 3 + 1);
    // According to number, return string values of: 1 = "rock", 2 = "paper" or 3 = "scissors"
    switch(number) {
        case 1:
            answer = "rock";
            break;
        case 2:
            answer = "paper";
            break;
        case 3:
            answer = "scissors";
            break;
    }
    return answer;
}

// console.log(getComputerChoice());

/*
Step 3: Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later.
For now, just assume the user will always enter a valid choice.
Test what your function returns by using console.log.
*/

// Create a new fucntion named getHumanChoice that comes from a prompt
function getHumanChoice() {
    var choice = prompt("Rock, paper or scissors?");
    return choice;
}

// console.log(getHumanChoice());

/*
Step 4: Declare the players score variables
Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0.
*/

// Create two new variables named humanScore and computerScore in the global scope with inital value of zero
var humanScore = 0;
var computerScore = 0;

/*
Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments,
plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.
*/

// Create a new function named playRound that takes as arguments both the human choice and the computer choice
function playRound(humanChoice, computerChoice) {
    // Make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase()
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("It's a tie! Rock does not beat Rock");
                break;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore += 1;
                break;
            } else {
                console.log("You lose! Paper beats Rock");
                computerScore += 1;
                break;
            }
        case "paper":
            if (computerChoice == "paper") {
                console.log("It's a tie! Paper does not beat Paper");
                break;
            } else if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
                break;
            } else {
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
                break;
            }
        case "scissors":
            if (computerChoice == "scissors") {
                console.log("It's a tie! Scissors does not beat Scissors");
                break;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
                break;
            } else {
                console.log("You lose! Rock beats Scissors");
                computerScore += 1;
                break;
            }
    }
}

playRound(getHumanChoice(), getComputerChoice());
