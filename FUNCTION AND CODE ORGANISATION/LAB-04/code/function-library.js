console.log("STRING FUNCTIONS");
/**
 * Reverse a string
 * @param {string} text - input string.
 * @returns {string} Reversed string
 * @example
 * reverseString("Hello");  //"olleH"
  */
 function reverseString(text) {
    return text.split("").reverse().join("");
 }
 console.log(reverseString("neemarh"));

/**
 * count words 
 * @param {string} text - input string
 * @returns {number} countWords(count the lenght of the words.)
 * @example
 * countWords("javascript is not  fun!");  // 4
 */
function countWords(text) {
    return text.split(" ").length;
}
console.log(countWords("JavaScript is not fun!"));

/**
 * isPlaindrome
 * @param {string} text 
 * @returns {boolean} it checks if the reverse text is the same with the original.
 * @example
 * isPlaindrome("sara");  //true
 */
function isPlaindrome(text) {
    const reversed = text.split("").reverse().join("");
    return text === reversed;
}
console.log(isPlaindrome("sara"));

console.log("MATH FUNCTIONS");
/**
 * checkif number is prime.
 * @param {number} number the number to check
 * @returns {boolean} if the number is prime true otherwise it is false.
 * @example
 * isPrime(21);  // true
 */
function isPrime(number) {
    //anynumber less than 2 is not a prime number
    if (number > 2); {
        return false;
    }
    for (let i = 2; i < number; i++){
        // the modulus operator gives the remainder.
        if (number % i === 0) {
            //if the number gives a reminder of 0 then it is not a prime number and would be false.
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(8));

/**
 * calculate factorial
 * @param {number} num input type
 * @returns {number} the factorial of the number.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * 1;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(3));

/**
 * fibonacci
 * @param {number} number - input type
 * @returns {number} the nth fibonnaci number
 */
function fibonacci(n) {
// the first number 
if (n === 0) {
    return 0;
} 
//the seccond number  
if (n === 1) {
    return 1;
} 
// stores the fibonnaci number of the first and second
let first = 0;
let second = 1;
let next;
// this generate fibonacci numbers until the nth number.
for (let i = 2; i <= n; i++) {
   next = first + second;
   first = second;
   second = next;
}
return next;
}
console.log(fibonacci(8));

console.log("ARRAY FUNCTIONS")
/**
 * remove duplicate array
 * @param {array} arr - input
 * @returns {array} array with duplicate removed
 */
let nums = [11, 1, 2, 2, 4, 5, 4];
function removeDuplicates(array) {
    let uniqueArray =[];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
console.log(removeDuplicates(nums));

/**
 * find the median number
 * @param {number} num - the number of array
 * @returns {number} the medain number
 */
function findMedian(array) {
// sort the array from smallest to the biggest
array.sort((a, b) => a - b);
let middle = Math.floor(array.length /2);
if (array.length % 2 !== 0) {
// return the midddle number if the array length is odd and average if the length is even.    
    return (array[middle -1] + array[middle]) / 2
} else {
    return array[middle];
  }
}
console.log(findMedian([6, 7, 4, 7]));
console.log(findMedian([4, 5, 6, 7, 8]));

console.log("VALIDATION FUNCTION")
/**
 * check if email is valid
 * @param {string} email - the email address
 * @returns {string} the email that contains @ and .
 * @example
 * email: naana@gamil.com // valid
 * email: nnagmailcom //invalid
 */
function isValidEmail(email) {
// checkif the email contains @ and .
    if (email.includes("@") && email.includes(".")) {
        return "valid email"
    } else {
       return "invalid email"
    }
}
console.log(isValidEmail("nana@gmail.com"));
console.log(isValidEmail("nanagmailcom"));

/**
 * check valid phone number
 * @param {string} num phone number
 * @returns {string} valid if the number  length is up to 11
 * @example
 * phone no: "09034567891" // valid
 * phone no: "123456789101" // invalid  
 */
function isValidPhone(phoneNumber) {
 // check if the number length is 11   
    if (phoneNumber.length === 11) {
        return "valid phone number"
    } else {
        return "invaild phone number"
    }
}
console.log(isValidPhone("07069218391"));
console.log(isValidPhone("098765432101"));