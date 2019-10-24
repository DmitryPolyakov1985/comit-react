const siblings = ['Vera', 'John', 'Andrew'];
const parents = ['Sveta', 'Sergey'];

const combinedArray = siblings.concat(parents);
console.log(combinedArray);

combinedArray.push('Shusha');
console.log(combinedArray);

combinedArray.reverse();
console.log(combinedArray);

const parentName = combinedArray[2];
console.log(parentName);

combinedArray[1] = 'Michael';
console.log(combinedArray);

for(let i = 0; i < combinedArray.length; i++) {
    console.log(`Loop through array using a for loop: ${combinedArray[i]}`);
}

for(let item of combinedArray) {
    console.log(`Loop through array using a for/of loop: ${item}`);
}

// Extra Exercises
// (Difficult) - Recreate the array.map function. Complete the following code

function map(arr, func) {
    // todo, turn arr into new array using func
    let newArr = [];

    for(let item in arr) {
        newArr.push(func(arr[item]));
    }
    return newArr;
       
}
  
const result = map([1, 2, 3], function(item) {
    return item * 2;
  });

console.log(result); // [2, 4, 6]
