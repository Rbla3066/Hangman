		//    Initial values    ------------>
window.onload = function init() {
	var wins = 0;
	var currentBoard = "_____";
	var usedLetters = [];
	var currentWord = "spider";
	var li = 0;
	var guesses = 12;
	var wi = 0;       //  <----word index used for choosing current word
	var words = ["spider","baboon","gorilla","howler","macaque","pygmy","mandrill","rhesus","orangutan"];
}
//  function called when a player wins or loses a game ----->
function newGame() {
	guesses = 12;
	usedLetters = [];
	currentWord = words[wi];
	currentBoard = "";
	li = 0;      // <--letter index used for assigning values to used letters array
	//   creates a blank board for the current word ---->
	for (var j=0; j<currentWord.length; j++){
		currentBoard += "_";
	}
	document.querySelector("#board").innerHTML = currentBoard;
	document.querySelector("#wins").innerHTML = "Wins: "+wins;
	document.querySelector("#used-letters").innerHTML = "";
	document.querySelector("#guesses").innerHTML = "12";
}
//   checks if player won current game   ----->
function winCheck() {
	for(var g=0; g < currentBoard.length; g++){
		if(currentBoard[g]=="_"){
			return false;
		}   
	}
	return true;
}
//   Function initiated when key is pressed
document.onkeyup = function(event) {
	//   first checks if player lost or won and starts new game if they have  --->
	if (guesses == 0){
		wi++;
		newGame();
		return;
	}
	if(winCheck()){
		wins++;
		wi++;
		newGame();
		return;
	}
	var currentLetter = String.fromCharCode(event.keyCode).toLowerCase();
	// checks if current letter had already been used  ----->
	for (var t=0; t<usedLetters.length; t++){  
		if (currentLetter==usedLetters[t]){
			return; 
		}
	}
	//  checks if current letter is in the current word   ---->
	for (var i=0; i<currentWord.length; i++){
		if (currentWord[i]===currentLetter){
			//   reveals current letter in the play board  ----->
			currentBoard[i] = currentLetter.toUpperCase();
		}
	}
	usedLetters[li] = currentLetter; // <---  adds letter to used letter array
	li++;
	guesses--;
	document.querySelector("#board").innerHTML = currentBoard;
	document.querySelector("#used-letters").innerHTML = usedLetters;
	document.querySelector("#guesses").innerHTML = "Guesses left:" + guesses;
}