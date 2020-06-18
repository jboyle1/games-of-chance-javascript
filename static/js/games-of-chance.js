// Create a function that greets and returns a name variable.
const sayHi = () => {
    const name = document.getElementById('userName').value;
    const greeting = `Hello ${name} lets play a game of Heads or Tails!`;
    document.getElementById('userGreeting').innerHTML = greeting;
    return name;
}

// Add an event listener for the sayhi() function.
document.getElementById('greetingListener').addEventListener('click', sayHi);