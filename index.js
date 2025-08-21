// Declare a variable named code1
let code1;

// Assign code1 to an expression that evaluates to 10 using 7 and 3
code1 = 7 + 3;

// Initialize code2 to have a value of 40 using three numbers with subtraction and division
let code2 = 50 - 60 / 6;

// Create code3 with a value of 39 using at least one modulo operator
let code3 = 100 % 61;

// Initialize message variable
let message = "The vault has been secured. The combination is:";

// Initialize codeA by concatenating the variables
let codeA = code1 + "-" + code2 + "-" + code3;

// Initialize codeB using a template literal
let codeB = `${code1}-${code2}-${code3}`;

// Print to console
console.log(message, codeA, codeB);