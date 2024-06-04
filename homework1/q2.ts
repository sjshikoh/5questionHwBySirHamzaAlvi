// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the entered number is greater than, equal to, or less 
// than the dynamic number value.

import inquirer from "inquirer";
const randomNumber = 6;
const userNumber = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Enter a number"
    }
]);
if (userNumber < "randomNumber") {
    console.log("your number is low "); 
} else if (userNumber === "randomNumber") {
    console.log("You guessed the right number ");
} else {
    console.log("your number is high ");
}
