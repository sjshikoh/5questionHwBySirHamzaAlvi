// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:


// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).

// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".

type scrambledArray= string | number | boolean
let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

scrambledArray.splice(2, 4);
scrambledArray.pop();
scrambledArray.unshift("I", "am", "a");
scrambledArray.push(123, "true");
let joined = scrambledArray.join(" ");

console.log(joined);


