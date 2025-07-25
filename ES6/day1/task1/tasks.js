///////////////////////////////////////////task1
console.log("Task 1: ");
let a = 5;
let b = 10;
console.log("Before swap: a = " + a + ", b = " + b);
[a, b] = [b, a];
console.log("After swap: a = " + a + ", b = " + b);


/////////////////////////////////////////task2
console.log("                                   ");
console.log("Task 2: ");
function getMinMax(...n) {
  const min = Math.min(...n); 
  const max = Math.max(...n); 
  return [min, max]; 
}

const [minValue, maxValue] = getMinMax(15, 3, 27, 8, 42, -5); 

console.log("Minimum value is:", minValue);
console.log("Maximum value is:", maxValue);


///////////////////////////////////////////task3
console.log("                                   ");
console.log("Task 3: ");
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let allStrings = fruits.every(fruit => typeof fruit === 'string');
console.log("All elements are strings:", allStrings); 

// const allStrings = fruits.every(function(fruit) {
//   return typeof fruit === 'string';
// });

let someStartWithA = fruits.some(fruit => fruit.startsWith('a'));
console.log("Some elements start with 'a':", someStartWithA); 

let filteredFruits = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log("Fruits that start with 'b' or 's':", filteredFruits);

let likedFruits = fruits.map(fruit => `I like ${fruit}`);
console.log(likedFruits); 




/////////////////////////////////////////////////////////////////task4
console.log("                                   ");
console.log("Task 4: ");
function getPositiveNumbers(numbers) {
  return numbers.filter(number => number > 0);
}

let nums = [5, -3, 0, 12, -9, 8];
let positives = getPositiveNumbers(nums);

console.log("Original array:", nums);   
console.log("Positive numbers:", positives); 


//////////////////////////////////////////////////////////////task5
console.log("                                   ");
console.log("Task 5: ");
function sum(numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
let numbs = [5, 10, 3, 7];
let result = sum(numbs);
console.log("The numbers are:");
numbs.forEach(num => console.log(num));
console.log("The sum is:", result); 



/////////////////////////////////////////////////task6
console.log("                                   ");
console.log("Task 6: ");
function capitalNames(names) {
  return names.map(function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
}
let names = ["eman", "ali", "mona"];
console.log("Original names:");
names.forEach(n => console.log(n));
let capitals = capitalNames(names);
console.log("Capitalized names:");
capitals.forEach(n => console.log(n));


////////////////////////////////////////////////////task7
console.log("                                   ");
console.log("Task 7: ");

function isLowerCase(str) {
  return str === str.toLowerCase();
}
console.log(isLowerCase("eman"));     
console.log(isLowerCase("Eman")); 

////////////////////////////////////////////////////task8
console.log("                                   ");
console.log("Task 8: ");

const filterByLength = (arr, Length) => arr.filter(str => str.length > Length);
const words = ["apple", "banana", "kiwi", "pear", "grape"];
const res = filterByLength(words, 4);
console.log(res); 
