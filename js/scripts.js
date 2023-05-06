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

printMessage('Wybór komputera to: ' + computerMove + '!');

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

printMessage('Wybór gracza to: ' + playerMove + '!');

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Gracz wygrywa!');
}
else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
}
else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Gracz wygrywa!');
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Gracz wygrywa!');
}
else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
}
else if(playerMove == 'nieznany ruch'){
    printMessage('Wpisz liczbę z zakresu 1-3');
}
else{
    printMessage('Mamy remis');
}