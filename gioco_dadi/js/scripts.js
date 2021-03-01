// chiedo all'utente il suo nickname
var nomeUtente = prompt("Inserisci il tuo nome utente per giocare: ");
var computer = "Machine"
// estraggo i numeri dei dadi in modo casuale
var dadoUtente = Math.floor(Math.random() * 6) + 1;
var dadoComputer = Math.floor(Math.random() * 6) + 1;

// verifico se ha vinto l'utente o il computer, oppure se hanno pareggiato
if (dadoUtente > dadoComputer) {
  document.getElementById('estrazione').innerHTML = "Hai vinto " + nomeUtente + ". Complimenti!";
} else if (dadoUtente == dadoComputer) {
  document.getElementById('estrazione').innerHTML = "Non ha vinto nessuno. Avete pareggiato!";
} else {
  document.getElementById('estrazione').innerHTML = "Hai perso. Ritenta!";
}
// stampo i numeri estratti
document.getElementById('numeriEstratti').innerHTML = "I numeri estratti sono: " + nomeUtente + ": " + dadoUtente + " e " + computer + ": " + dadoComputer + ".";
