//Declare all global variables
	//Store all possible words for use in the hangman game
	var wordBank = ["one", "two", "three", "four", "five"];

	//Check which words have already been used by the game
	var wordUsed = [];
		//Genereate full wordUsed array based on current wordBank array length
		for (var i = 0; i < wordBank.length; i++) {
			wordUsed.push("unused");
		}
	var wordDisplay=[]; //Array for displaying word on screen, is modified while user guesses

	//Array to store what letters have already been guessed
	var usedLetters = [];

	//Store current word being used by the game
	var wordActive = "original";

	//Is this the first game, or is the user now skipping the current word?
	var firstGame = true;

	//Tallys to display
	var wins = 0;
	var losses = 0;
	var guessesLeft;

	var guessesAllowed = 10;//How many guesses before loss

	//loop variable for checking if a word has already been used
	var wordIndex = -1;

//Initiate game
	function startButton() {
		//Declare variables
		wordDisplay = []; //Clear the array
		usedLetters = []; //Clear the array
		var newWord = false; //condition to exit loop
		guessesLeft = guessesAllowed;


		//If not the first game, increment the losses counter
		if (firstGame === false) {
			losses++;
		}
		else {
			firstGame = false;
		}

		//Select word at random from wordBank
		//If all words have already been used then skip while loop to avoid infinite loop
		if (wordUsed.includes("unused") === false) {
			alert("IIIII HAAAAAVE NOOOOOOOO WOOOOOOOOORDSSSSSSSSSSSSS!!!!!!!!!!");
		}
		else {
			while (newWord === false) {
				wordIndex = Math.floor(Math.random() * wordBank.length)
				if(wordUsed[wordIndex] === "unused") {
					wordActive = wordBank[wordIndex];
					wordUsed[wordIndex] = "used";
					newWord = true;
				}
			}
		
			//Create array with enough "_" characters for entire word
			//Generate "_" with correct length
			for (i=0; i < wordActive.length; i++) {
				wordDisplay.push(" _");
			}
		}
		updateDisplay();
	}

//Trigger for when user inputs a letter
	document.onkeyup = function(event) {
		//Don't run this function until the start button is clicked at least once
		if (firstGame === false) {
			//If he key pressed isn't a letter, then don't run this function
			var isKeyPressedALetter = 0;
			isKeyPressedALetter = event.keyCode;
			if (isKeyPressedALetter > 64 && isKeyPressedALetter < 173) {
				var letterGuessed = event.key.toLowerCase(); //store key presses
				var correctGuess = false; //The guess is assumed incorrect until a correct guess is verified

				//Check if letter has already been guessed
				if (usedLetters.indexOf(letterGuessed.toUpperCase()) === -1) {
					usedLetters.push(letterGuessed.toUpperCase()); //Add letter to list of used letters
					usedLetters.sort();
					guessesLeft--;
					//If no guesses left, then lose
					if (guessesLeft === 0) {
						alert(`you lost....the word was: ${wordActive}`);
						usedLetters = [];
						updateDisplay();
						startButton();
						return
					}
					else {
						//Check for correct guess and update display array
						for (i=0; i < wordActive.length; i++) {
							if (wordActive.charAt(i) === letterGuessed) {
								wordDisplay[i] = letterGuessed;
								correctGuess = true;
								updateDisplay();
							}
						}
						//Check for win condition
						setTimeout(function(){
							if (wordDisplay.indexOf(" _") === -1) {
								alert(`YOU WON!!! Word was: ${wordActive}`);
								usedLetters = [];
								wins++; //Increment the win tally
								firstGame = true; //Reset to prevent incrementing loss tally
								startButton();
							}
						},500);
						updateDisplay();
					}
				}
			}
		}
	}

//Updates the win, loss, and guesses left display
function updateDisplay() {
	document.querySelector("div.current-word h3").innerHTML = wordDisplay.join("");
	document.querySelector("div.record h2").innerHTML = `Wins: ${wins}<br>Losses: ${losses}`
	document.querySelector("div.guesses-left h4").innerHTML = `Guesses left: ${guessesLeft}`
	document.querySelector("div.used-characters h4").innerHTML = `Letters used: ${usedLetters}`
}
//User can enter a set of their own words to use in the game
function enterWords() {
	var wordListInput = prompt("Enter your list of words here seperated by spaces");
	wordBank = [];
	var i = 0;

	while (wordListInput.includes(" ") === true && i < 200) {
		wordBank[i] =  wordListInput.slice(0,wordListInput.indexOf(" "))

		wordListInput = wordListInput.slice(wordListInput.indexOf(" "),wordListInput.length);

		if (wordListInput.charAt(0) === " ") {
			wordListInput = wordListInput.slice(1,wordListInput.length);
		}
		i++;
	}
}	