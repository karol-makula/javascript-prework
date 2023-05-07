let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

let playerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce'));

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }
    else if(argMoveId == 2){
        return 'papier';
    }
    else if(argMoveId == 3){
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' +argMoveId + '.');
    return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove){
    
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Gracz wygrywa!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Gracz wygrywa!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Gracz wygrywa!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
    } else if( argPlayerMove == 'nieznany ruch'){
        printMessage('Wpisz liczbę z zakresu 1-3');
    } else{
        printMessage('Mamy remis');
    }
}

printMessage('Wybór gracza to: ' + playerMove + '!');
printMessage('Wybór komputera to: ' + computerMove + '!');
displayResult(computerMove, playerMove);