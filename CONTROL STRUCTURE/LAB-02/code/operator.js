console.log("Arithematic operations:");
// Arithemetic operations.
let num1 = 22;
let num2 = 5;
// sum operator
let sum = num1 + num2;
console.log("Sum:", sum)
// Product operator
let product = num1 * num2;
console.log("Product:", product)
//Subtarction operator.
let difference = num1 - num2;
console.log("Difference:", difference)
// Remainder operator
let remainder = num1 % num2;
console.log("Remainder:", remainder)
//Division operator
let quotient = num1 / num2;
console.log("Quotient:", quotient)


//Comparison operation.
console.log("Comparison operation:");
//comaparison if two values are equal
let isEqual = num1 === num2;
console.log(`isEqual = ${isEqual}`);
// comparison for isGrater than 
let isGreater = num1 > num2;
console.log(`isGreater = ${isGreater}`);
//IsNotEqual
let isNotEqual = num1 !== num2;
console.log(`isNotEqual: = ${isNotEqual}`);
// isLessThan
let isLessThan = num1 < num2;
console.log(`isLessThan: = ${isLessThan}`);

//Logical operations.
console.log("Logical operation:");
//AND (&&) and ||(OR) operator.
let bothTrue = num1 > num2 && num2 < num1;
let eitherTrue = num1 > num2 || num2 < num1;

console.log("BothTrue:", bothTrue);
console.log("EitherTrue:", eitherTrue);
console.log("NOT:",!(num1 > num2));

