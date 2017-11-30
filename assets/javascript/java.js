//Declare all global variables
	//Store all possible words for use in the hangman game
	var wordBank = ["one", "two", "three", "four", "five"];
	//Check which words have already been used by the game

	var wordUsed = [];
		//Genereate full wordUsed array based on current wordBank array length
		for (var i = 0; i < wordBank.length; i++) {
			wordUsed.push("unused");
		}
	
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
		//If not the first game, increment the losses counter
		if (firstGame === false) {
			losses++;
		}
		else {
			firstGame = false;
		}

		//Select word at random from wordBank
		var newWord = false;
		while (newWord === false) {
			wordIndex = Math.floor(Math.random() * wordBank.length)
			if(wordUsed[wordIndex] === "unused") {
				wordActive = wordBank[wordIndex];
				wordUsed[wordIndex] = "used";
				newWord = true;
			}
			
		}
	console.log(losses);
	console.log(wordActive);
	}

