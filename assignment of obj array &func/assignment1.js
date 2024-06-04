// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
// structure.
// Task: Create a program that manages a simple friend list.
// Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName, 
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your 
// friend list.
// type Friend ={
//     firstName: string,
//     lastName: string,
//     id?: number
// };
const people = {
    friends: []
};
const friend1 = {
    firstName: "Shazia",
    lastName: "Abdulla",
    id: 1
};
const friend2 = {
    firstName: "Rayyan",
    lastName: "Shikoh",
    id: 2
};
const friend3 = {
    firstName: "Khalda",
    lastName: "Irfan",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
export {};
