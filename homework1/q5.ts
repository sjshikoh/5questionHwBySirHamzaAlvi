// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments

//  {
// 
// if (operator === " Addition" ) {
//     return a + b;
// }
// else {
//     return a - b;
// }

// };
// console.log(calculator(3, 7 , "subtraction"));


let operator = 'subtraction';
function calculator(a: number, b: number, operator: string) {
switch (operator) {
    case 'addition':
    
        return a + b;
        break;

   case 'subtraction':
        return a - b;
        break;

    default:
        console.log('invalid operator');
}
}
console.log(calculator(10, 5, "addition"));
console.log(calculator(10, 5, "subtraction"));