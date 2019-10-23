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
for(let i = 0; i <= 10; i++) {
    console.log(`Numbers from 0 to 10 using a for loop: ${i}`);
}

let index = 0;
while(index <= 10) {
    console.log(`Numbers from 0 to 10 using a while loop: ${index}`);
    index++;
}

let index2 = 0;
do {
    console.log(`Numbers from 0 to 10 using a do/while loop: ${index2}`);
    index2++;
} while(index2 <= 10)

//Show numebers from 100 to 0
for(let i = 100; i >= 0; i--) {
    console.log(`Number from 100 to 0 using a for loop: ${i}`);
}

let index1 = 100;
do {
    console.log(`Number from 100 to 0 using a do/while loop: ${index1}`);
    index1--;
} while(index1 >= 0)

let index3 = 100;
while(index3 >= 0) {
    console.log(`Number from 100 to 0 using a while loop: ${index3}`);
    index3--;
}

//Show even numbers between 0 and 100
for(let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(`Even numbers between 0 and 100 using a for loop: ${i}`);
    }
}

let index4 = 0;
while(index4 <= 100) {
    console.log(`Even numbers between 0 and 100 using a while loop: ${index4}`);
    index4 += 2;
}

let index5 = 0;
do {
    console.log(`Even numbers between 0 and 100 using a do/while loop: ${index5}`);
    index5 += 2;
} while(index5 <= 100)

//Produce the following output
for(let i = 0; i < 13; i++) {
    for(let j = 0; j <= i; j++) {
        document.write('*');
    }
    document.write('<br />')
}