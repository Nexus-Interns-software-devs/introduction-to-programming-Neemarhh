console.log("GUESSING GAME!");
/**
 * check if the guess is too high or low
 * @param {number} num- the player guess
 * @returns {string} the reslut of the guess
 */
const secretNumber = 42;
function checkGuess(guess) {
// check if the guess is higher than the secrets number    
    if (guess > secretNumber) {
        return "Too high";
// check if the guess is lower than the secrect number        
    } else if (guess < secretNumber) {
        return "Too low";
    } else {
        return "correct";
    }
 }
console.log("Guess:", checkGuess(50));
console.log("Guess:", checkGuess(30));
console.log("Guess:", checkGuess(42));
console.log("Guess:", checkGuess(100));
console.log("Guess:", checkGuess(1));