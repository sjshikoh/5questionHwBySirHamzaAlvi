// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default 
// response.
import inquirer from "inquirer";
let isFriend = "Haniya";
let answer = await inquirer.prompt([
    {
        name: "name",
        type: "string",
        message: "Enter your friend name: "
    }
]);
if (isFriend === "Shazia" || isFriend === "Rayyan") {
    console.log(`${isFriend} is your friend`);
}
else {
    console.log(`${isFriend} is not your friend`);
}
