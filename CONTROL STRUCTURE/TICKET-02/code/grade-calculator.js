// calculator garde
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(" GRADE CALCULATOR");

readline.question( "Enter your grade (0-100): ", scoreInput => {
    const score = parseInt(scoreInput);
    let grade;
    
      // if/else if/else chain
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

  readline.close();
})
  
 