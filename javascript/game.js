var bio = {
	spider : "<img src=\"images/spider.jpg\" id=\"photo\"><br>The Spider monkey is native to Central and South America and found in tropical forests. They are known for their long limbs.<audio autoplay><source src=\"audio/spider.wav\" type=\"audio/mpeg\"></audio>",
	gorilla : "<img src=\"images/gorilla.jpg\" id=\"photo\"><br>The Gorilla is a ground dwelling ape native to Africa. Males are known to be aggressive. Hear the sound of them pounding on their chest.<audio autoplay><source src=\"audio/gorilla.wav\" type=\"audio/mpeg\"></audio>",
	baboon : "<img src=\"images/baboon.jpg\" id=\"photo\"><br>The Baboon is native to Africa. They are known for their really bizzare behinds!<audio autoplay><source src=\"audio/baboon.wav\" type=\"audio/mpeg\"></audio>",
	proboscis : "<img src=\"images/proboscis.jpg\" id=\"photo\"><br>The Proboscis monkey is native to Indonesia. They are best known for their strange noses, growing up to 4 inches!<audio autoplay><source src=\"audio/proboscis.wav\" type=\"audio/mpeg\"></audio>",
	orangutan : "<img src=\"images/orangutan.jpg\" id=\"photo\"><br>The Orangutan is an ape native to Indonesia and Malaysia. They are among the most intelligent primates, using tools and even constructing their own beds from branches and leaves!<audio autoplay><source src=\"audio/proboscis.wav\" type=\"audio/mpeg\"></audio>",
	macaque : "<img src=\"images/macaque.jpg\" id=\"photo\"><br>The Macaque is the most widespread primate in the world apart from humans. They are known to live in densely populated cities, stealing food from local vendors. They have even been seen trading stolen jewelry for food. Bad monkeys!<audio autoplay><source src=\"audio/macaque.wav\" type=\"audio/mpeg\"></audio>",
	howler : "<img src=\"images/howler.jpg\" id=\"photo\"><br>The Howler monkey is native to South and Central South America. They are known for their loud 'howl' call. The sound can travel up to a mile.<audio autoplay><source src=\"audio/howler.wav\" type=\"audio/mpeg\"></audio>"
}
var game = {
	'wins' : 0,
	'currentBoard' : '',
	'usedLetters' : [],
	'words' : ["spider","baboon","gorilla","howler","macaque","proboscis","orangutan"],
	'guesses' : 12,
	'currentWord' : '',
	'gameNumber' : 0,
	newGame : function(){
		var position = game.words.indexOf(game.currentWord);
		var newWords = [];
		for (var ii=0; ii<game.words.length; ii++){
			if (ii != position){
				newWords.push(game.words[ii]);
			}
		}
		game.words = newWords;
		var index = Math.floor(Math.random() * game.words.length);
		game.currentWord = game.words[index];
		var newBoard = "";
		for(var i=0; i<game.currentWord.length; i++){
			newBoard += "_";
		}
		game.currentBoard = newBoard;
		game.guesses = 12;
		game.usedLetters = [];
		document.querySelector("#board").innerHTML = game.currentBoard;
		document.querySelector("#wins").innerHTML = "Wins: "+game.wins;
		document.querySelector("#used-letters").innerHTML = "<br>";
		document.querySelector("#guesses").innerHTML = "Guesses left: 12";
	},
	winCheck : function(){
		for(var g=0; g < game.currentBoard.length; g++){
			if(game.currentBoard.charAt(g)=="_"){
				return false;
			}   
		}
		return true;
	}
}
window.onload = function () {
	var index = Math.floor(Math.random() * game.words.length);
	game.currentWord = game.words[index];
	var newBoard = "";
	for(var i=0; i<game.currentWord.length; i++){
		newBoard += "_";
	}
	game.currentBoard = newBoard;
	document.querySelector("#board").innerHTML = game.currentBoard;
}
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
document.onkeyup = function(event) {
	if (game.guesses == 0 || game.winCheck()){
		game.newGame();
		return;
	}
	var currentLetter = String.fromCharCode(event.keyCode).toLowerCase();
	if (isLetter(currentLetter)){
		for (var t=0; t<game.usedLetters.length; t++){  
			if (currentLetter==game.usedLetters[t]){
				return; 
			}
		}
		for (var i=0; i<game.currentWord.length; i++){
			if (game.currentWord.charAt(i)==currentLetter){
				game.currentBoard = game.currentBoard.replaceAt(i, currentLetter.toUpperCase());
			}
		}
		game.usedLetters.push(currentLetter);
		game.guesses--;
		if(game.winCheck() || game.guesses == 0){
			if (game.winCheck()){
				game.wins++;
			}
			game.currentBoard = game.currentWord.toUpperCase();
			document.querySelector("#wins").innerHTML = "Wins: "+game.wins;
			document.querySelector("#info-screen").innerHTML = bio[game.currentWord];
		}
		document.querySelector("#board").innerHTML = game.currentBoard;
		document.querySelector("#used-letters").innerHTML = game.usedLetters;
		document.querySelector("#guesses").innerHTML = "Guesses left: " + game.guesses;
	}
}