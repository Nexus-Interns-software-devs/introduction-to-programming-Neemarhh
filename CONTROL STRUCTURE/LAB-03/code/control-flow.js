const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// simple if/else
// this would check if the number is positive or negative.

readline.question("Enter a number:", numberInput => {
  
    const number = parseInt(numberInput);

     if (number > 0) {
        console.log(`The number ${number} is positive.`);
    } else {
        console.log(`The number ${number} is negative.`);
    }
// multiple conditions else if

readline.question( "Enter your grade (0-100): ", scoreInput => {
    const score = parseInt(scoreInput);
    let grade;
      
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Score: ${score} - Grade: ${grade}`);
 
  //---------------------------------------------------------------------------
console.log("Voter's eligibility");
// this will collect the input of the current year and the birthyear
readline.question("Enter your currentYear:", currentYearInput => {
  const currentYear = parseInt(currentYearInput);
 readline.question("Enter your birthYear:", birthYearInput => {
  const birthYear = parseInt(birthYearInput);
  // calculate the age
const age = currentYear - birthYear;
if (age >= 18) {
  //ask the user if they are registered or not
  readline.question("Are you registered? yes/no", registeredInput => {
    if (registeredInput.toLowerCase() === "yes") {
      console.log("your are eligible to vote and registered!");
    } else {
      console.log("you are eligible but not registered!");
    }
    readline.close();
  });
  // this would run if the user is  not up to 18
} else {
  console.log("You are not eligible to vote!");
  readline.close();
}
 });
});  
})
});




