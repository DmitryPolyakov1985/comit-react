let weekdayNumber = 4;

// If/else statements
if(weekdayNumber == 1) {
    console.log('Today is Monday');
} else if(weekdayNumber == 2) {
    console.log('Today is Tuesday');
} else if(weekdayNumber == 3) {
    console.log('Today is Wednesday');
} else if(weekdayNumber == 4) {
    console.log('Today is Thursday');
} else if(weekdayNumber == 5) {
    console.log('Today is Friday');
} else if(weekdayNumber == 6) {
    console.log('Today is Saturday');
} else if(weekdayNumber == 7) {
    console.log('Today is Sunday');
} else {
    console.log('Error: Number not between 1-7');
}

let message;
// Switch statements
switch (weekdayNumber) {
    case 1:
        message = 'Today is Monday';
        break;
    case 2:
        message = 'Today is Tuesday';
        break;
    case 3:
        message = 'Today is Wednesday';
        break;
    case 4:
        message = 'Today is Thursday';
        break;
    case 5:
        message = 'Today is Friday';
        break;
    case 6:
        message = 'Today is Saturday';
        break;
    case 6:
        message = 'Today is Sunday';
        break;
    default:
        message = 'Error: Number not between 1-7';
        break;
}
console.log(`My message from the switch statement is: ${message}`);



