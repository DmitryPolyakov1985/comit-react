alert('Enter two numbers to see if the first is greater than the second');

const firstNumber = prompt('What is you first number?');
const secondNumber = prompt('What is your second number?');

const accurate = confirm(firstNumber > secondNumber);
console.log('Were we accurate?', accurate);