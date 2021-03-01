var nomeUtente = prompt("Inserisci il tuo nome utente per giocare: ");
var computer = "Machine"

var dadoUtente = Math.floor(Math.random() * 6);
var dadoComputer = Math.floor(Math.random() * 6);


if (dadoUtente > dadoComputer) {
  document.getElementById('estrazione').innerHTML = "Hai vinto " + nomeUtente + ". Complimenti!";
} else {
  document.getElementById('estrazione').innerHTML = "Hai perso. Ritenta!";
}

document.getElementById('numeriEstratti').innerHTML = "I numeri estratti sono: " + nomeUtente + ": " + dadoUtente + " e " + computer + ": " + dadoComputer + ".";
