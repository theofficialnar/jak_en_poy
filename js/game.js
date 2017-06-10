var aiAnswers = ['paper', 'rock', 'scissors'];
var aiScore = 0;
var playerScore = 0;
var playerName;


$('#paper').click(function(){
	var input = $(this).data('value');
	var counter = Math.floor((Math.random() * 3) + 0);
	var aiInput = aiAnswers[counter];
	$('#aiInputText').html("Computer chooses " + aiInput);
	$('#plyrInput').html(playerName + " choose " + input);

	if (input === "paper") {
		if (aiInput === "scissors"){
		$('#result').html(playerName + " lose!");
		aiScore++;
		$('#aiScore').html("AI: " + aiScore);
		}

		else if (aiInput === "rock"){
		$('#result').html(playerName + " Win!");
		playerScore++;
		$('#playerScore').html(playerName + " : " + playerScore);
		}

		else {
		$('#result').html("Tie!");
		}
	}
});

$('#rock').click(function(){
	var input = $(this).data('value');
	var counter = Math.floor((Math.random() * 3) + 0);
	var aiInput = aiAnswers[counter];
	$('#aiInputText').html("Computer chooses " + aiInput);
	$('#plyrInput').html(playerName + " choose " + input);

	if (input === "rock") {
		if (aiInput === "paper"){
		$('#result').html(playerName + " lose!");
		aiScore++;
		$('#aiScore').html("AI: " + aiScore);
		}

		else if (aiInput === "scissors"){
		$('#result').html(playerName + " Win!");
		playerScore++;
		$('#playerScore').html(playerName + " : " + playerScore);
		}

		else {
		$('#result').html("Tie!");
		}
	}
});

$('#scissors').click(function(){
	var input = $('#scissors').data('value');
	var counter = Math.floor((Math.random() * 3) + 0);
	var aiInput = aiAnswers[counter];
	$('#aiInputText').html("Computer chooses " + aiInput);
	$('#plyrInput').html(playerName + " choose " + input);
	
	if (input === "scissors") {
		if (aiInput === "rock"){
		$('#result').html(playerName + " lose!");
		aiScore++;
		$('#aiScore').html("AI: " + aiScore);
		}

		else if (aiInput === "paper"){
		$('#result').html(playerName + " Win!");
		playerScore++;
		$('#playerScore').html(playerName + " : " + playerScore);
		}

		else {
		$('#result').html("Tie!");
		}
	}
});

$('#btn-playerName').click(function(){
	playerName = $('#playerName').val();
});

$(window).on('load',function(){
	$('#modal').show();
});

$('#btn-playerName').click(function(){
	$('#modal').hide();
})