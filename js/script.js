function playGame(playerInput) {
	clearMessages();

	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	function getMoveName(randomNumber){
		if (randomNumber == 1) {
			return 'kamień';
		} else if (randomNumber == 2) {
			return 'papier';
		} else if (randomNumber == 3) {
			return 'nożyce'
		}

		printMessage('Nie znam ruchu o id ' + randomNumber + '.');
		return 'nieznany ruch';

		
	}

	const randomNumber = Math.floor(Math.random() * 3 +1);

	const computerMove = getMoveName(randomNumber);

	// const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

	const playerMove = getMoveName(playerInput);

	function displayResult(computerMove, playerMove){

		if (computerMove == 'kamień' && playerMove == 'papier'){
			return 'Wygrałeś! :)';
		} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
			return 'Wygrałeś! :)';
		}  else if (computerMove == 'papier' && playerMove == 'nożyce'){
			return 'Wygrałeś! :)';
		} else if (computerMove == playerMove){
			return 'Padł remis! :|';
		} else {
			return 'Przegrałeś! :(';
		}
	}

	printMessage('Wynik: ' + 'Zagrałem ' + computerMove + ', a Ty ' + playerMove + '. ' + displayResult(computerMove, playerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){ playGame(1);});

document.getElementById('play-paper').addEventListener('click', function(){ playGame(2);});

document.getElementById('play-scissors').addEventListener('click', function(){ playGame(3);});