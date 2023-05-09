{
    function playGame(playerInput){

        clearMessages();
    
        const randomNumber = Math.floor(Math.random() * 3 + 1);
    
        const computerMove = getMoveName(randomNumber);
        printMessage('Wybór komputera to: ' + computerMove + '!');
        
        function getMoveName(moveId){
            if(moveId == 1){
                return 'kamień';
            } else if(moveId == 2){
                return 'papier';
            } else if(moveId == 3){
                return 'nożyce';
            }
        }

        const playerMove = getMoveName(playerInput);
        printMessage('Wybór gracza to: ' + playerMove + '!');

        const displayResult = function(computerMove, playerMove){
            
            if(computerMove == 'kamień' && playerMove == 'papier'){
                printMessage('Gracz wygrywa!');
            } else if(computerMove == 'papier' && playerMove == 'nożyce'){
                printMessage('Gracz wygrywa!');
            } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
                printMessage('Gracz wygrywa!');
            } else if(computerMove == playerMove){
                printMessage('Mamy remis');
            } else{
                printMessage('Komputer wygrywa!');
            }
        }
        displayResult(computerMove, playerMove);
    }
    
    const playRock = document.getElementById('play-rock').addEventListener('click', function (){playGame(1);});
    const playPaper = document.getElementById('play-paper').addEventListener('click', function (){playGame(2);});
    const playScissors = document.getElementById('play-scissors').addEventListener('click', function (){playGame(3);});
}