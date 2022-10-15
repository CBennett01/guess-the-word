
const guessedLetterElement = document.querySelector(".guessed-letters"); // The unordered list where the player’s guessed letters will appear.
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
const placeholder = function (word) {
    const placeholderLetters = []; //holds the word's letters? 
    for (const letter of word) { //loops through the array
        console.log(letter); 
        placeholderLetters.push("●") // pushes the circle to the end of the array
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

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

const guessValidater = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "No guess received. Try guessing a letter.";
    } else if (input.length > 1) {
        message.innerText = "Try entering only one letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please guess using only a letter.";
    } else {
        return input;
    }
}

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        displayGuessedLetter();
        updateWordInProgress(guessedLetters);
    }
};

const displayGuessedLetter = function () {
    guessedLetterElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetterElement.append(li);
    }
}


const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const  wordArray = wordUpper.split("");
    const revealWord = [];    
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    winChecker();
}

const winChecker = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};