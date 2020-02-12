{
	const playGame = function(playerInput) {
		clearMessages();

		const printMessage = function(msg) {
			const div = document.createElement('div');
			div.innerHTML = msg;
			document.getElementById('messages').appendChild(div);
		}

		function clearMessages() {
			document.getElementById('messages').innerHTML = '';
		}

		const getMoveName = function(randomNumber) {
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

		const playerMove = getMoveName(playerInput);

		const getGameResultMsg = function(computerMove, playerMove) {
			const winnerMsg = 'Wygrałeś! :)',
				drawMsg = 'Padł remis! :|',
				lostMsg = 'Przegrałeś! :(';

			if (
				(computerMove === 'kamień' && playerMove === 'papier')	||		
				(computerMove === 'nożyce' && playerMove === 'kamień')	||
				(computerMove === 'papier' && playerMove === 'nożyce')
			) {
				return winnerMsg;
			} else if (computerMove === playerMove) {
				return drawMsg;
			}
			return lostMsg;
		}

		printMessage('Wynik: ' + 'Zagrałem ' + computerMove + ', a Ty ' + playerMove + '. ' + getGameResultMsg(computerMove, playerMove));
	}

	document
		.getElementById('play-rock')
		.addEventListener('click', function () {
			playGame(1);
		});

	document
		.getElementById('play-paper')
		.addEventListener('click', function () {
			playGame(2); 
		});

	document
		.getElementById('play-scissors')
		.addEventListener('click', function () {
			playGame(3);
		});
}