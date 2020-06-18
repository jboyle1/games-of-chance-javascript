// Starting money total:
let totalMoney001 = 100
let name;
let wager1;
let guess;
// Greeting

// Create a function that greets and returns a name variable.
let sayHi = () => {
    name = document.getElementById('userName').value;
    let greeting = `Hello ${name} lets play a game of Heads or Tails! We have given you a complimentary £${totalMoney001} on the house. \n Please place a bet!`;
    document.getElementById('userGreeting').innerHTML = greeting;
    return name
}
// Add an event listener for the sayhi() function.
document.getElementById('greetingListener').addEventListener('click', sayHi);


// Coin Flip

// Get value for 'wager1' and 'guess' variables that will be used in the coin flip function.
let wager1_value = () => {
    let wager1 = document.getElementById('userWager1').value;
    let printWager1 = `Thanks, ${name} you just bet ${wager1}. Please guess either 'heads' or 'tails`;
    document.getElementById('printUserWager1').innerHTML = printWager1;
    return wager1;
}
// Add an event listener for the wager1_value() function.
document.getElementById('wager1Listener').addEventListener('click', wager1_value);

let guessValue = () => {
    let guess = document.getElementById('userGuess').value;
    if (guess === "heads" || guess === "Heads" || guess === 'tails' || guess === 'Tails') {
    let printGuess = `Thanks, ${name} you Guessed ${guess}. Please press the 'flip' button to play!`;
    document.getElementById('printUserGuess').innerHTML = printGuess;
    return guess;
    }
}
// Add an event listener for the wager1_value() function.
document.getElementById('guessListener').addEventListener('click', guessValue);

