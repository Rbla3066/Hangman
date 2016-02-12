		//    Initial values    ------------>
		var currentBoard = ["_","_","_","_","_","_"];
		var wins = 0;
		var usedLetter = [];
		var currentWord = "spider";
		var li = 0;
		var guesses = 12;
		var wi = 0;
		var words = ["spider","baboon","gorilla","howler","macaque","pygmy","mandrill","rhesus","orangutan"];
		var spiderInfo = "<img src=\"images/spider.jpg\" id=\"photo\"><br>The spider monkey is native to Central and South America and found in tropical forests. They are known for their long limbs.";
		var baboonInfo = "<img src=\"images/baboon.jpg\" id=\"photo\"><br>The baboon is native to Africa. They are known for their really bizzare behinds!";
window.onload = function init() {
	wins = 0;
	currentBoard = ["_","_","_","_","_","_"];
	usedLetters = [];
	currentWord = "spider";
	li = 0;
	guesses = 12;
	wi = 0;       //  <----word index used for choosing current word
	words = ["spider","baboon","gorilla","howler","macaque","pygmy","mandrill","rhesus","orangutan"];
	console.log("hello");
}
//  function called when a player wins or loses a game ----->
function newGame() {
	guesses = 12;
	usedLetters = [];
	currentWord = words[wi];
	currentBoard = [];
	li = 0;      // <--letter index used for assigning values to used letters array
	//   creates a blank board for the current word ---->
	for (var j=0; j<currentWord.length; j++){
		currentBoard[j] = "_";
	}
	document.querySelector("#board").innerHTML = currentBoard;
	document.querySelector("#wins").innerHTML = "Wins: "+wins;
	document.querySelector("#used-letters").innerHTML = "<br>";
	document.querySelector("#guesses").innerHTML = "Guesses left: 12";
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
	//    checks if current letter is in the current word   ---->
	for (var i=0; i<currentWord.length; i++){
		if (currentWord[i]==currentLetter){
			//   reveals current letter in the play board  ----->
			currentBoard[i] = currentLetter.toUpperCase();
		}
	}
	usedLetters[li] = currentLetter; // <---  adds letter to used letter array
	li++;
	guesses--;
	if(winCheck()){
		if (words[wi]=="spider"){
			document.querySelector("#info-screen").innerHTML = spiderInfo;
		}
		if (words[wi]=="baboon"){
			document.querySelector("#info-screen").innerHTML = baboonInfo;
		}
	}
	console.log(currentBoard);
	document.querySelector("#board").innerHTML = currentBoard;
	document.querySelector("#used-letters").innerHTML = usedLetters;
	document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
}