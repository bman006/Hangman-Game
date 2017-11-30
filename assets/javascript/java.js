//Declare all variables
	//Store all possible words for use in the hangman game
	var wordBank = ["one", "two", "three", "four", "five"];
	//Check which words have already been used by the game

	var wordUsed = [];
		//Genereate full wordUsed array based on current wordBank array length
		for (var i = 0; i < wordBank.length; i++) {
			wordUsed.push(0);
		}
	
	//Store current word being used by the game
	var wordActive = "original";

	//Is this the first game, or is the user now skipping the current word?
	var firstGame = true;

	//Tally for number of wins and losses
	var wins = 0;
	var losses = 0;


//Initiate game
	function startButton() {
		//If not the first game, increment the losses counter
		if (firstGame === false) {
			losses++;
		}
		else {
			firstGame = false;
		}
	}

// losses++;
// console.log(losses);

