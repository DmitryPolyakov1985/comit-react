const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(item => item ** 2);
console.log(`Numbers: ${numbers}`);
console.log(`Squared numbers are: ${squaredNumbers}`);

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = newNums.filter(item => item % 2 === 0 );
const oddNums = newNums.filter(item => item % 2 !== 0 );
console.log(`Numbers: ${newNums}`);
console.log(`Even numbers: ${evenNums}`);
console.log(`Odd numbers: ${oddNums}`);

const people = [
    {
        name: 'John',
        age: 21,
        city: 'Vancouver'
    },
    {
        name: 'Ann',
        age: 30,
        city: 'Regina'
    },
    {
        name: 'Peter',
        age: 41,
        city: 'Victoria'
    },
    {
        name: 'Dan',
        age: 10,
        city: 'Saskatoon'
    },
    {
        name: 'Dmitry',
        age: 34,
        city: 'Saskatoon'
    },
    {
        name: 'Denise',
        age: 55,
        city: 'Moscow'
    }
];

const ageOverThirty = people.filter( person => person.age > 30 );
console.log('People older than 30: ', ageOverThirty);
console.log(`People who are older than 30: ${ageOverThirty.map(item => item.name)}`);

const lessThan20AndLiveInSask = people.filter(person => person.age < 30 && person.city == 'Saskatoon');
console.log('People less than 20 AND live in Saskatoon:', lessThan20AndLiveInSask);
console.log(`People less than 20 AND live in Saskatoon: ${lessThan20AndLiveInSask.map(person => person.name)}`);

const ages = people.map(person => person.age);
console.log('Everybody\'s ages:', ages);


// BONUS
const stripVowels = str => {
    return str.toLowerCase().split('').filter(item => item != 'a' && item != 'i' && item != 'u' && item != 'o' && item != 'e').join('');
}
console.log(stripVowels('Want to learn React'));
console.log(stripVowels('Filter the above array into a new variable'));
console.log(stripVowels('Exercise Instructions'));

