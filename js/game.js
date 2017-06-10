var aiAnswers = ['paper', 'rock', 'scissors'];
var aiScore = 0;
var playerScore = 0;
var playerName;


document.getElementById('paper').onclick=function(){
	var input = document.getElementById('paper').value;
	var counter = Math.floor((Math.random() * 3) + 0);
	var aiInput = aiAnswers[counter];
	document.getElementById('aiInputText').innerHTML = "Computer chooses " + aiInput;
	document.getElementById('plyrInput').innerHTML = playerName + " choose " + input;

	if (input === "paper") {
		if (aiInput === "scissors"){
		document.getElementById('result').innerHTML =  playerName + " lose!";
		aiScore++;
		document.getElementById('aiScore').innerHTML = "AI: " + aiScore;
		}
		else if (aiInput === "rock"){
		document.getElementById('result').innerHTML =  playerName + " Win!";
		playerScore++;
		document.getElementById('playerScore').innerHTML = playerName + " : " + playerScore;
		}
		else {
		document.getElementById('result').innerHTML = "Tie!";
		}
	}
}

document.getElementById('rock').onclick=function(){
	var input = document.getElementById('rock').value;
	var counter = Math.floor((Math.random() * 3) + 0);
	var aiInput = aiAnswers[counter];
	document.getElementById('aiInputText').innerHTML = "Computer chooses " + aiInput;
	document.getElementById('plyrInput').innerHTML =  playerName + " choose " + input;

	if (input === "rock") {
		if (aiInput === "paper"){
		document.getElementById('result').innerHTML =  playerName + " lose!";
		aiScore++;
		document.getElementById('aiScore').innerHTML = "AI: " + aiScore;
		}
		else if (aiInput === "scissors"){
		document.getElementById('result').innerHTML =  playerName + " Win!";
		playerScore++;
		document.getElementById('playerScore').innerHTML = playerName + " : " + playerScore;
		}
		else {
		document.getElementById('result').innerHTML = "Tie!";
		}
	}
}

document.getElementById('scissors').onclick=function(){
	var input = document.getElementById('scissors').value;
	var counter = Math.floor((Math.random() * 3) + 0);
	var aiInput = aiAnswers[counter];
	document.getElementById('aiInputText').innerHTML = "Computer chooses " + aiInput;
	document.getElementById('plyrInput').innerHTML =  playerName + " choose " + input;
	
	if (input === "scissors") {
		if (aiInput === "rock"){
		document.getElementById('result').innerHTML =  playerName + " lose!";
		aiScore++;
		document.getElementById('aiScore').innerHTML = "AI: " + aiScore;
		}
		else if (aiInput === "paper"){
		document.getElementById('result').innerHTML =  playerName + " Win!";
		playerScore++;
		document.getElementById('playerScore').innerHTML = playerName + " : " + playerScore;
		}
		else {
		document.getElementById('result').innerHTML = "Tie!";
		}
	}
}

document.getElementById('btn-playerName').onclick=function(){
	playerName = document.getElementById('playerName').value
	// alert(playerName);
}

$(window).on('load',function(){
	$('#modal').show();
});

$('#btn-playerName').click(function(){
	$('#modal').hide();
})