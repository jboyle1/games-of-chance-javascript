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
let wager1Value = () => {
    wager1 = document.getElementById('userWager1').value;
    let printWager1 = `Thanks, ${name} you just bet £${wager1}. Please guess either 'heads' or 'tails`;
    document.getElementById('printUserWager1').innerHTML = printWager1;
    wager1 = parseInt(wager1);
    return wager1;
}
// Add an event listener for the wager1_value() function.
document.getElementById('wager1Listener').addEventListener('click', wager1Value);

let guessValue = () => {
    guess = document.getElementById('userGuess').value;
    if (guess === "heads" || guess === "Heads" || guess === 'tails' || guess === 'Tails') {
    let printGuess = `Thanks, ${name} you Guessed ${guess}. Please press the 'flip' button to play!`;
    document.getElementById('printUserGuess').innerHTML = printGuess;
    return guess;
    } else {
        let printGuess = 'Please guess either heads or tails';
        document.getElementById('printUserGuess').innerHTML = printGuess;
    }
}

// Add an event listener for the wager1_value() function.
document.getElementById('guessListener').addEventListener('click', guessValue);

// Create a function that simulates flipping a coin and calling either "Heads" or "Tails".
let coinFlip = () => {
    //'coinside' generates a side of the coin that wins.
    coinSide = Math.floor(Math.random() * 2);
    // First conditional statement allows for a winning argument of 'Heads'. 1 is a match to 'Heads.
    if ((guess === "heads" || guess === "Heads") && coinSide == 1) {
        totalMoney001 = totalMoney001 + (wager1 * 2);
        let printCoinFlip = `Heads, you won! You now have £${totalMoney001}!`;
        document.getElementById('resultOutput1').innerHTML = printCoinFlip;
        return totalMoney001;
    } // second conditional statement allows for a winning argument of 'Tails'. 2 is a match to 'Heads.
    else if ((guess === "tails" || guess === "Tails") && coinSide == 2) {
        totalMoney001 = totalMoney001 + (wager1 * 2);
        let printCoinFlip = `Tails, you won! You now have £${totalMoney001}!`;
        document.getElementById('resultOutput1').innerHTML = printCoinFlip;
        return totalMoney001;
    } // else statement prints if you loose. E.g if logical comparison operators do not match.
    else {
        totalMoney001 = totalMoney001 - wager1;
        let printCoinFlip = `Sorry you lost, you now have £${totalMoney001}!`;
        document.getElementById('resultOutput1').innerHTML = printCoinFlip;
        return totalMoney001;
    }
}

// Add an event listener for the coinFlip() function.
document.getElementById('resultsListener').addEventListener('click', coinFlip);