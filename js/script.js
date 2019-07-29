
const buttonRock = document.getElementById('button-rock');

const buttonPaper = document.getElementById('button-paper');

const buttonScissors = document.getElementById('button-scissors');


/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
    clearMessages();
    let playerWins = document.getElementById('player-wins').innerHTML;
    let computerWins = document.getElementById('computer-wins').innerHTML;
    playerWins = parseInt(playerWins);
    computerWins = parseInt(computerWins);
    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if ((argPlayerMove == 'papier' && argComputerMove == 'kamień') || (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||  (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
            printMessage('Wygrywasz!');
            playerWins = playerWins + 1;
            printWins('player-wins', playerWins)
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis');
        } else {
            printMessage('Przegrywasz :(');
            computerWins = computerWins + 1;
            printWins('computer-wins', computerWins)
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    console.log(argButtonName + ' został kliknięty');

    let playerMove = argButtonName;
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);

}




buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });