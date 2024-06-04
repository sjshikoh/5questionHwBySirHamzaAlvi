// Assignmenmt Of Array
// Question 1
// Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango", "orange".
// Question 2
// Declare an array named numbers that can contain only number 
// elements and initialize it with the values 10, 20, 30, and 40.
// Question 3
// Access the third element of the fruits array and assign it to a 
// variable named thirdFruit.
// Question 4
// Change the second element of the numbers array to 25.
// Question 5
// Add the element "grape" to the end of the fruits array using the 
// method.
// Question 6
// Remove the last element from the fruits array using the 
// method and assign it to a variable name
// Question 7
// Remove the first element from the fruits array using the 
// method and assign it to a variable named firstFruit.
// Question 8
// Add the element "kiwi" to the beginning of the fruits array 
// using the method.
// Question 9
// Remove 2 elements from the fruits array starting from index 1 
// using the method.
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the 
// fruits array using the method.
// Question 11
// Create a new array named citrusFruits that contains the first 
// two elements of the fruits array using the method.
// Question 12
// Create a new array named lastTwoFruits that contains the last 
// two elements of the fruits array using the method

// Question 1
const fruits: string[] = ["apple", "banana", "mango", "orange"];
console.log(fruits, "fruits");

// Question 2
const myArray: [number, number, number, number] = [10, 20, 30, 40];
console.log(myArray, "myArray");

// Question 3
const thirdFruit = fruits[2];
console.log(fruits[2])

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