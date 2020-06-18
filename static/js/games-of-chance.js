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
        let printCoinFlip = `Heads, you won! You have £${totalMoney001}!`;
        document.getElementById('resultOutput1').innerHTML = printCoinFlip;
        return totalMoney001;
    } // second conditional statement allows for a winning argument of 'Tails'. 2 is a match to 'Heads.
    else if ((guess === "tails" || guess === "Tails") && coinSide == 2) {
        totalMoney001 = totalMoney001 + (wager1 * 2);
        let printCoinFlip = `Tails, you won! You have £${totalMoney001}!`;
        document.getElementById('resultOutput1').innerHTML = printCoinFlip;
        return totalMoney001;
    } // else statement prints if you loose. E.g if logical comparison operators do not match.
    else {
        totalMoney001 = totalMoney001 - wager1;
        let printCoinFlip = `You lost, you have £${totalMoney001}!`;
        document.getElementById('resultOutput1').innerHTML = printCoinFlip;
        return totalMoney001;
    }
}

// Add an event listener for the coinFlip() function.
document.getElementById('resultsListener').addEventListener('click', coinFlip);

// /Coin Flip

// Cho-Han

// Create a function that moves the user onto the next game.
let nextGame = () => {
    let printNextGame = `${name} shall we play a game of Cho-Han! You now have £${totalMoney001}.\n Please place a bet!`;
    document.getElementById('resultnextGame1').innerHTML = printNextGame;
}
// Add an event listener for the nextGame() function.
document.getElementById('nextGame1Listener').addEventListener('click', nextGame);

// Get value for 'wager2' and 'guess' variables that will be used in the Cho-Han function.
let wager2Value = () => {
    wager2 = document.getElementById('userWager2').value;
    let printWager2 = `Thanks, ${name} you just bet £${wager2}. Please enter odd or even`;
    document.getElementById('printUserWager2').innerHTML = printWager2;
    wager2 = parseInt(wager2);
    return wager2;
}
// Add an event listener for the wager2Value() function.
document.getElementById('wager2Listener').addEventListener('click', wager2Value);

// Create a function that gets an odd or even value for Cho-Han function.
let oddOrEven = () => {
    guessOddOrEven = document.getElementById('userGuessOddOrEven').value;
    if (guessOddOrEven === "odd" || guessOddOrEven === "Odd" || guessOddOrEven === 'even' || guessOddOrEven === 'Even') {
    let printGuessOddOrEven = `Thanks, ${name} you Guessed ${guessOddOrEven}. Please press the 'Throw' button to play!`;
    document.getElementById('printOddOrEven').innerHTML = printGuessOddOrEven;
    return guessOddOrEven;
    } else {
        let printGuess = 'Please guess either odd or even';
        document.getElementById('printOddOrEven').innerHTML = printGuess;
    }
}

// Add an event listener for the oddOrEven() function.
document.getElementById('ListenerOddOrEven').addEventListener('click', oddOrEven);

// Create a function that simulates rolling two dice and adding the results together. The player predicts whether the sum of those dice is odd or even and wins if their prediction is correct.
let choHan = () => {
    //'dice1' & 'dice2' each generates a number between 1 & 6.
    dice1 = Math.floor(Math.random() * 6);
    dice2 = Math.floor(Math.random() * 6);

    // Print out the values of the dice thrown
    let printDice = `You threw ${dice1} & ${dice2}!`;
    document.getElementById('resultOutput2').innerHTML = printDice;

    // Get the modulo of the sum of the two values added together
    let sumOfTwoDice = (dice1 + dice2) % 2;

    // Write a conditional statement that uses logical operators to find out if the left over modulo value in 'sumOfTwoDice' is odd or even and prints if the user has guessed correctly. This in turn adds or subtracts the new 'totalMoney001' value. 
    if (sumOfTwoDice === 0 && (guessOddOrEven === "even" || guessOddOrEven === "Even")) {
        // Add the 'totalMoney' to the winnings
        totalMoney001 = totalMoney001 + (wager2 * 2);
        let winnerEven = `Even! You have won. you have £${totalMoney001}!`;
        document.getElementById('resultOutput3').innerHTML = winnerEven;
        return totalMoney001;
    } 
    // Create an else if statement that prints if the 'sumOfTwoDice' is odd.
    else if  (sumOfTwoDice === 0 && (guessOddOrEven === "odd" || guessOddOrEven === "Odd")) {
        // Add the 'totalMoney' to the winnings
        totalMoney001 = totalMoney001 + (wager2 * 2);
        let winnerOdd = `Odd! You have won. you have £${totalMoney001}!`;
        document.getElementById('resultOutput3').innerHTML = winnerOdd;
        return totalMoney001;
    } 
    // Create an else statement that prints if the user looses.
    else {
        // Subtract the 'wager2 ' value from total money.
        totalMoney001 = totalMoney001 - wager2
        let choHanLooser = `You have Lost! you have £${totalMoney001}!`;
        document.getElementById('resultOutput3').innerHTML = choHanLooser;
        return totalMoney001;
    }
}

// Add an event listener for the choHan() function.
document.getElementById('choHanResultsListener').addEventListener('click', choHan);


// High or Low

// Create a function that moves the user onto the next game.
let nextGame2 = () => {
    let printNextGame = `${name} shall we play a game of Hi or Low! You now have £${totalMoney001}.\n Please place a bet!`;
    document.getElementById('resultnextGame2').innerHTML = printNextGame;
}
// Add an event listener for the nextGame() function.
document.getElementById('nextGame2Listener').addEventListener('click', nextGame2);

// Get value for 'wager2' and 'guess' variables that will be used in the Cho-Han function.
let wager3Value = () => {
    wager3 = document.getElementById('userWager3').value;
    let printWager3 = `Thanks, ${name} you just bet £${wager3}. Please enter high or low`;
    document.getElementById('printUserWager3').innerHTML = printWager3;
    wager3 = parseInt(wager3);
    return wager3;
}
// Add an event listener for the wager2Value() function.
document.getElementById('wager3Listener').addEventListener('click', wager3Value);

// Create a function that gets an odd or even value for Cho-Han function.
let highOrLow = () => {
    guessHighOrLow = document.getElementById('userGuessHighOrLow').value;
    if (guessHighOrLow === "high" || guessHighOrLow === "High" || guessHighOrLow === 'low' || guessHighOrLow  === 'Low') {
    let printGuessHighOrLow = `Thanks, ${name} you Guessed ${guessHighOrLow}. Please press the 'Draw' button to play!`;
    document.getElementById('printHighOrLow').innerHTML = printGuessHighOrLow;
    return guessHighOrLow;
    } else {
        let printGuess = 'Please guess either high or low';
        document.getElementById('printOddOrEven').innerHTML = printGuess;
    }
}

// Add an event listener for the oddOrEven() function.
document.getElementById('guessHighOrLowListener').addEventListener('click', highOrLow);


// Create a function that simulates two players picking a card randomly from a deck of cards. The higher number wins.
let highOrLowFunction = () => {
    // Create 'cardNumber' variable that contains a list of numbers from 1 to 13
    playerDraw = Math.floor(Math.random() * 13);
    houseDraw = Math.floor(Math.random() * 13);

    // Create a if statement that checks if the players Draw is higher and maches with high or vice versa using logical operators. If either match, the user is printed as the as the winner and the cards and 'totalMoney003' are printed also.
    if ((playerDraw > houseDraw && guessHighOrLow == "high") || (playerDraw < houseDraw && guessHighOrLow == "low")) {
        totalMoney001 = totalMoney001 + (wager3 * 2);
        let highWin = `You won! You're new total is ${totalMoney001}\n Thanks for playing!`;
        document.getElementById('resultOutput4').innerHTML = highWin;
        return totalMoney001;
    } else if ((playerDraw < houseDraw && guessHighOrLow == "high") || (playerDraw > houseDraw && guessHighOrLow == "low")) {
        totalMoney001 = totalMoney001 + (wager3 * 2);
        let highLoose = `Sorry you lost!  You're new total is ${totalMoney001}\n Thanks for playing!`;
        document.getElementById('resultOutput4').innerHTML = highLoose;
        return totalMoney001;
    } else {
        totalMoney003 = totalMoney002;
        let highLoose = `The result is a tieYou're new total is ${totalMoney001}\n Thanks for playing!`;
        document.getElementById('resultOutput4').innerHTML = highLoose;
    }
}

// Add an event listener for the highOrLow() function.
document.getElementById('HighOrLowresultsListener').addEventListener('click', highOrLowFunction);