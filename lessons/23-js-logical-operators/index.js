let currentHour = prompt('Please enter current hour from 0 to 23'); 

if(currentHour < 0 || currentHour > 23) {
    alert('Your input is incorrect');
} else if (currentHour < 8 || currentHour >= 18) {
    alert('We are closed now');
} else {
    alert('We are open');
}