let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if(randomNumber == 1) {
        computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else{
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove + '!');

let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce');

if(playerMove == 1) {
    playerMove = 'kamień';
}
else if(playerMove == 2){
    playerMove = 'papier';
}
else if(playerMove == 3){
    playerMove = 'nożyce';
}
else {
    playerMove = "nieznany ruch";
}

printMessage('Twój ruch to: ' + playerMove);