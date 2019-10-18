alert('Enter two numbers to see if the first is greater than the second');

const firstNum = prompt('Please enter your first number');
const secondNum = prompt('Please enter your second number');

if(firstNum < secondNum) {
    alert('Your first number is less than the second number');
} else if(firstNum > secondNum) {
    alert('Your first number is larger than the second number');
} else {
    alert('Your numbers are equal');
}

