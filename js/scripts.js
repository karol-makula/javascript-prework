function playGame(playerInput){

    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);
    
    let playerMove = getMoveName(playerInput);
    
    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        }
    }
    
    function displayResult(argComputerMove, argPlayerMove){
        
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Gracz wygrywa!');
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Gracz wygrywa!');
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Gracz wygrywa!');
        } else if(argComputerMove == argPlayerMove){
            printMessage('Mamy remis');
        } else{
            printMessage('Komputer wygrywa!');
        }
    }

    printMessage('Wybór gracza to: ' + playerMove + '!');
    printMessage('Wybór komputera to: ' + computerMove + '!');
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function rock(){playGame(1);});
document.getElementById('play-paper').addEventListener('click', function paper(){playGame(2);});
document.getElementById('play-scissors').addEventListener('click', function scissors(){playGame(3);});
