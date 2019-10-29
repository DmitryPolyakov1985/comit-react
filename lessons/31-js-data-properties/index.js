const favMovies = prompt(`Please enter your 3 favourite movies seperated by a comma`);

// turn string into an array
const arrOfMovies = favMovies.split(', ');

// movies in a string
console.log(`Movies in a string: ${favMovies}`);

// array of movies
console.log(`Array of movies: ${arrOfMovies}`);

const sentenceToReverse = prompt(`Enter a sentence that you'd like to reverse`);
const trimmedSentence = sentenceToReverse.trim();
console.log(trimmedSentence);

const reverseSentence = trimmedSentence.split('').reverse().join('');
console.log(`Reversed sentence: --- ${reverseSentence} --- `);
alert(`Your string revesed: --- ${reverseSentence} --- `);