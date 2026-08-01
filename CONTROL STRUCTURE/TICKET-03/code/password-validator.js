console.log("PASSWORD VALIDATOR");
//Declare a password with a string.
const password = "hellos"
//check if the password has at least 8 characters
const hasLength = password.length >= 8;

let hasNumber = false;
let hasUpperCase = false;
//lopp through each character in the password
for ( let i = 0; i < password.length; i++) {
//check if the character is a number
    if (password[i] >= "0" && password[i] <= "9") {
        hasNumber = true;
    }
// check if character is uppercase
if (password[i] >= "A" && password[i] >= "Z") {
    hasUpperCase = true;
   }    
//if both conditions are met then it stops checking 
if (hasNumber && hasUpperCase) {
    break;
   }
}
//display password
console.log("password:", password);
//check requirement
if (hasLength && hasNumber && hasUpperCase) {
    console.log("password valid");
} else {
    console.log("password invalid!");
    if (!hasLength) {
        console.log("missing at least 8 characters")
    }
    if (!hasNumber) {
        console.log("missing at least 1 number")
    }
    if (!hasUpperCase) {
        console.log("Missing at least one uppercase letter")
    }
}
