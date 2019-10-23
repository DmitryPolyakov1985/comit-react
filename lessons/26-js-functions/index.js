// Define a function that will show even numbers from 0 to 100 as output
function showEvenNumbers() {
    for(let i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}
console.log(showEvenNumbers());


// Define a function named showUser
function showUser(name, age, phoneNumber, street, postalCode, isMarried) {
    console.log(`My name is ${name}`);
    console.log(`I am ${age} years old`);
    console.log(`My phone number is ${phoneNumber}`);
    console.log(`I live on ${street}`);
    console.log(`My postal code is ${postalCode}`);
    console.log(`I am ${isMarried}`);
}
showUser('Dmitry', 34, 6393174785, 'Herold Road', 'S7V 1H9', 'married');


// Define a evenNumbers variable and assign a function as value
const evenNumbers = (functionToShowEvenNumbers) => {
    functionToShowEvenNumbers();
}
evenNumbers(showEvenNumbers);
evenNumbers(showEvenNumbers);
evenNumbers(showEvenNumbers);
evenNumbers(showEvenNumbers);
evenNumbers(showEvenNumbers);

// Define a fibonacci variable and assign a function value
let fibonacci = () => {
    
}