//first javascript game project 
//ISSUE: multiple violations of dry principle 
//with some elements using the same name for the class and the ID of an elements
// have to choose one not both 
const selectMenu = document.getElementById("levelSelect");
const levelScreen = document.getElementById("level");
const answers = document.getElementById("answers");
var foundAnswers = [] 
var score = 0;

var gameBoard = new Map(); // holds each word with corresponding dashes 
var shuffleButton = document.getElementById("shuffleButton");
var letterButtons = buttonList.children;
var level = "";



function PrintBoard(wordList){
	//attempt to clear the board 
	console.log("length of word list : " + wordList.length);
	$('div#answers').empty();
	

	if(score == wordList.length){
		quit(); //if the array has no elements, it means the player has guessed all the words 
	}

	for(var index of wordList){
		//loop determines how many dashes will be in an answer
		var dashes = index.replace(/[a-z]/gi, ' _ ');
		
		
		if(foundAnswers.includes(index)){ //check if user has already guessed that word 
			console.log("answer has already been found, replacing key with value....")
			dashes = index;
			console.log(dashes + ": found answer");
			console.log("index: " + (index)+ "\ndashes: " + (dashes));
			gameBoard.set(index,dashes); //replace the maps key with its value
		}else{
			gameBoard.set(index, dashes);
		}
	}

	for(var element of gameBoard.values()){
		console.log("values of Map : " + (element));
		var word = $("<p>", {class: "dashes grid-item"}).text(element);
		$("#answers").append(word);
	}

}

function quit(){
	$('div#answers').empty();
	$('#level').hide();
	$('#levelSelect').show();
	
}


/** EVENT LISTENERS  */
shuffleButton.onclick = function(){ //on click to shuffle the letters around 

	var frag = document.createDocumentFragment(); //holds elements temporarily 
	while (letterButtons.length) {
		frag.appendChild(letterButtons[Math.floor(Math.random() * letterButtons.length)]);
	}
	buttonList.appendChild(frag);
}


// function to get letters the user can input , and the answers themselves 
