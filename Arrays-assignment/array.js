// Question 1
const fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits, "fruits");
// Question 2
const myArray = [10, 20, 30, 40];
console.log(myArray, "myArray");
// Question 3
const thirdFruit = fruits[2];
console.log(fruits[2]);
// Question 4
myArray[1] = 25;
console.log(myArray);
// Question 5
fruits.push('grape');
console.log(fruits, "fruits");
// Question 6
const lastFruit = fruits.pop();
console.log(fruits);
// Question 7
const firstFruit = fruits.shift();
console.log(fruits);
console.log(firstFruit);
// Question 8
const addFruit = fruits.unshift('kiwi');
console.log(fruits, "fruits");
// Question 9
fruits.splice(1, 2);
console.log(fruits, "fruits");
// Question 10
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits, "fruits");
// Question 11
const citrusFruits = fruits.splice(0, 2);
console.log(citrusFruits, "citrusFruits");
// Question 12
const lastTwoFruits = fruits.splice(-2, 2);
console.log(lastTwoFruits, "lastTwoFruits");
export {};
