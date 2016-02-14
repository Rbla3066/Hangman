		//    Initial values    ------------>
		var currentBoard = ["_","_","_","_","_","_"];
		var wins = 0;
		var usedLetter = [];
		var currentWord = "spider";
		var li = 0;
		var guesses = 12;
		var wi = 0;
		var words = ["spider","baboon","gorilla","howler","macaque","proboscis","orangutan"];
		//  info, picture, and sound added to screen when player wins  ---->
		var spiderInfo = "<img src=\"images/spider.jpg\" id=\"photo\"><br>The Spider monkey is native to Central and South America and found in tropical forests. They are known for their long limbs.<audio autoplay><source src=\"audio/spider.wav\" type=\"audio/mpeg\"></audio>";
		var baboonInfo = "<img src=\"images/baboon.jpg\" id=\"photo\"><br>The Baboon is native to Africa. They are known for their really bizzare behinds!<audio autoplay><source src=\"audio/baboon.wav\" type=\"audio/mpeg\"></audio>";
		var gorillaInfo = "<img src=\"images/gorilla.jpg\" id=\"photo\"><br>The Gorilla is a ground dwelling ape native to Africa. Males are known to be aggressive. Hear the sound of them pounding on their chest.<audio autoplay><source src=\"audio/gorilla.wav\" type=\"audio/mpeg\"></audio>";
		var howlerInfo = "<img src=\"images/howler.jpg\" id=\"photo\"><br>The Howler monkey is native to South and Central South America. They are known for their loud 'howl' call. The sound can travel up to a mile.<audio autoplay><source src=\"audio/howler.wav\" type=\"audio/mpeg\"></audio>";
		var macaqueInfo = "<img src=\"images/macaque.jpg\" id=\"photo\"><br>The Macaque is the most widespread primate in the world apart from humans. They are known to live in densely populated cities, stealing food from local vendors. They have even been seen trading stolen jewelry for food. Bad monkeys!<audio autoplay><source src=\"audio/macaque.wav\" type=\"audio/mpeg\"></audio>";
		var proboscisInfo = "<img src=\"images/proboscis.jpg\" id=\"photo\"><br>The Proboscis monkey is native to Indonesia. They are best known for their strange noses, growing up to 4 inches!<audio autoplay><source src=\"audio/proboscis.wav\" type=\"audio/mpeg\"></audio>";
		var orangutanInfo = "<img src=\"images/orangutan.jpg\" id=\"photo\"><br>The Orangutan is an ape native to Indonesia and Malaysia. They are among the most intelligent primates, using tools and even constructing their own beds from branches and leaves!<audio autoplay><source src=\"audio/proboscis.wav\" type=\"audio/mpeg\"></audio>";
window.onload = function init() {
	wins = 0;
	currentBoard = ["_","_","_","_","_","_"];
	usedLetters = [];
	currentWord = "spider";
	li = 0;
	guesses = 12;
	wi = 0;       //  <----word index used for choosing current word
	words = ["spider","baboon","kellan","gorilla","howler","macaque","proboscis","orangutan"];
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
	if(winCheck() || guesses == 0){
		if (winCheck()){
			wins++;
		}
		document.querySelector("#wins").innerHTML = "Wins: "+wins;
		if (words[wi]=="spider"){
			document.querySelector("#info-screen").innerHTML = spiderInfo;
		}
		if (words[wi]=="baboon"){
			document.querySelector("#info-screen").innerHTML = baboonInfo;
		}
		if (words[wi]=="gorilla"){
			document.querySelector("#info-screen").innerHTML = gorillaInfo;
		}
		if (words[wi]=="howler"){
			document.querySelector("#info-screen").innerHTML = howlerInfo;
		}
		if (words[wi]=="macaque"){
			document.querySelector("#info-screen").innerHTML = macaqueInfo;
		}
		if (words[wi]=="proboscis"){
			document.querySelector("#info-screen").innerHTML = proboscisInfo;
		}
		if (words[wi]=="orangutan"){
			document.querySelector("#info-screen").innerHTML = orangutanInfo;
		}
	}
	console.log(currentBoard);
	document.querySelector("#board").innerHTML = currentBoard;
	document.querySelector("#used-letters").innerHTML = usedLetters;
	document.querySelector("#guesses").innerHTML = "Guesses left: " + guesses;
}