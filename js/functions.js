function printMessage(msg){
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

function printWins(user, msg) {
    console.log('aktualny wynik to ' + msg)
    var div = document.getElementById(user);
    div.innerHTML = msg;
}