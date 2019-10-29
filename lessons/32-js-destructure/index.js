const favFruit = prompt(`Enter your five most favourite fruits seperated by a comma`);
console.log(`String of favourite fruits: ${favFruit}`);

const arrayOfFavFruits = favFruit.split(', ');
console.log(arrayOfFavFruits);

const [firstFavFruit, secondFavFruit, thirdFavFruit, ...restOfFruits] = arrayOfFavFruits;
console.log(`Your three most favourite fruits are: 1) ${firstFavFruit}, 2) ${secondFavFruit}, 3) ${thirdFavFruit}`);
alert(`Your three most favourite fruits are: 1) ${firstFavFruit}, 2) ${secondFavFruit}, 3) ${thirdFavFruit}`);

console.log(`Your least favourite fruits of out five are: ${restOfFruits}`);
alert(`Your least favourite fruits of out five are: ${restOfFruits}`);