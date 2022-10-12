
const showGuessedLetter = document.querySelector(".guessed-letters"); // The unordered list where the player’s guessed letters will appear.
const guessButton = document.querySelector(".guess"); // The button with the text “Guess!” in it.
const letterInputBox = document.querySelector(".letter"); // The text input where the player will guess a letter.
const wordInProgress = document.querySelector(".word-in-progress"); // The empty paragraph where the word in progress will appear.
const guessesRemaining = document.querySelector(".remaining"); // The paragraph where the remaining guesses will display.
const guessesRemainingSpan = document.querySelector(".remaining span"); // The span inside the paragraph where the remaining guesses will display.
const message = document.querySelector(".message"); // The empty paragraph where messages will appear when the player guesses a letter.
const playAgainButton = document.querySelector(".play-again"); // The hidden button that will appear prompting the player to play again.
const word = "magnolia";
const guessedLetters = [];

//Display symbols as placeholders for the chosen word's letters
const tempDotts = function (word) {
    const tempDottsLetters = []; //holds the word's letters? 
    for (const letter of word) { //loops through the array
        tempDottsLetters.push("●") // pushes the circle to the end of the array
        console.log(letter); 
    }
    wordInProgress.innerText = tempDottsLetters.join("");

}
tempDotts(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault(); //keeps from reloading
    message.InnerText = ""; //empties message paragraph
    const guess = letterInputBox.value;
    const validatedGuess = guessValidater(guess);

    if (validatedGuess) {
        makeGuess(guess);
    }
    letterInputBox.value = "";
});

const guessValidater = function (guess) {
    const acceptedLetter = /[a-zA-Z]/;
    if (guess.length === 0) {
        message.innerText = "No guess received. Try guessing a letter.";
    } else if (guess.length > 1) {
        message.innerText = "Try entering only one letter.";
    } else if (!guess.match(acceptedLetter)) {
        message.innerText = "Please guess using only a letter.";
    } else {
        return guess;
    }
}

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};