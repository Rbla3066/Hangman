//    Initial values    ------------>
var wins = 0;
var wi = 0;       //  <----word index used for choosing current word
var words = ["spider","baboon","gorilla","howler","macaque","pygmy","mandrill","rhesus","orangutan"];
//     Values set when a new game starts... not sure how to initialize a new game
var guesses = 12;
var usedLetters = [];
var currentWord = words[wi];
var currentBoard = "";
var li = 0;      // <--letter index used for assigning values to used letters array
//   creates a blank board for the current word ---->
for (var j=0; j<currentWord.length; j++){
	currentBoard += "_";
}
//   Function initiated when key is pressed
document.onkeyup = function(event) {
	var currentLetter = String.fromCharCode(event.keyCode).toLowercase();
	// checks if current letter had already been used  ----->
	for (var t=0; t<usedLetters.length; t++){  
		if (currentLetter==usedLetters[t]){
			// ??  abort function  ??  
		}
	}
	//  checks if current letter is in the current word   ---->
	for (var i=0; i<currentWord.length; i++){
		//   reveals current letter in the play board  ----->
		if (currentWord[i]==currentLetter){
			currentBoard[i] = currentLetter.toUppercase();
		}
	}
	usedLetters[li] = currentLetter; // <---  adds letter to used letter array
	li++;
	guesses--;
}
	//  ?? checks if player won current game  ??----->
	for(var g=0; g<currentBoard.length; g++){
		if()   
	}
	//   ?? starts new game if they have won  ??
	wins++;  // <--   and increments wins
	wi++;    // <--   and increments word index