// Add all the numbers bettwen 0 and 1000 using for statement
let sum = 0;
for(let i = 0; i <= 1000; i++) {
    if(i > 400) {
        break;
    }

    console.log(i);
    sum += i;
}
console.log(`Total sum is: ${sum}`);

//Show numbers from 0 to 10
let index = 0;
while(index <= 10) {
    console.log(`Number from 0 to 10 using a while loop: ${index}`);
    index++;
}

//Show numebers from 100 to 0
let index1 = 100;
do{
    console.log(`Number from 100 to 0 using a do/while loop: ${index1}`);
    index1--;
} while(index1 >= 0)

//Show even numbers between 0 and 100
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`Even numbers between 0 and 100 using a for loop: ${i}`);
    }
}

//Produce the following output
for(let i = 0; i < 13; i++) {
    for(let j = 0; j <= i; j++) {
        document.write('*');
    }
    document.write('<br />')
}