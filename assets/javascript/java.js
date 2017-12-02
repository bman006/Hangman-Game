//Declare all global variables
	//Store all possible words for use in the hangman game
	var wordBank = ["one", "two", "three", "four", "five"];

	//Check which words have already been used by the game
	var wordUsed = [];
		//Genereate full wordUsed array based on current wordBank array length
		for (var i = 0; i < wordBank.length; i++) {
			wordUsed.push("unused");
		}
	var wordDisplay = []; //Array for displaying word on screen, is modified while user guesses

	//Array to store what letters have already been guessed
	var usedLetters = [];

	//Store current word being used by the game
	var wordActive = "original";

	//Is this the first game, or is the user now skipping the current word?
	var firstGame = true;

	//Tally for number of wins and losses
	var wins = 0;
	var losses = 0;

	//loop variable for checking if a word has already been used
	var wordIndex = -1;

//Initiate game
	function startButton() {
	//Declare variables
		var wordDisplay = []; //Clear the array
		var wordHTML = "";
		var newWord = false;
		var usedLetters = []; //Clear the array


	//If not the first game, increment the losses counter
		if (firstGame === false) {
			losses++;
		}
		else {
			firstGame = false;
		}

	//Select word at random from wordBank
		//If all words have already been used then skip while loop to avoid infinite loop
		if (wordUsed.includes("unused")) {
			while (newWord === false) {
				wordIndex = Math.floor(Math.random() * wordBank.length)
				if(wordUsed[wordIndex] === "unused") {
					wordActive = wordBank[wordIndex];
					wordUsed[wordIndex] = "used";
					newWord = true;
				}
			}
		}

	//Create array with enough "_" characters for entire word
		//Generate "_" with correct length
		for (i=0; i < wordActive.length; i++) {
			wordDisplay.push(" _");
		}
		document.getElementsByClassName("current-word")[0].innerHTML = "<h3>" + wordDisplay.join("") + "</h3>";
console.log(wordActive);
console.log(wordDisplay);	
	}

//Trigger for when user inputs a letter
	document.onkeyup = function(event) {
		console.log(wordDisplay);
		var letterGuessed = event.key;
		console.log(wordDisplay);
		//Check if letter has already been guessed
		if (usedLetters.indexOf(letterGuessed) === -1) {
			usedLetters.push(letterGuessed); //Add letter to list of used letters
			for (i=0; i < wordActive.length; i++) {
				if (wordActive.charAt(i) === letterGuessed) {
					wordDisplay[i] = letterGuessed;
				}
			}
		document.getElementsByClassName("current-word")[0].innerHTML = "<h3>" + wordDisplay.join("") + "</h3>";
		}


	}
