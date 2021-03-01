// chiedo l'email dell'utente
var emailUtente = prompt("Inserisci la tua email:");

// creo un contenitore delle mail esistenti
var email = ["mario.rossi@gmail.com", "marco_ruffini@hotmail.it", "paola.franceschelli@gmail.com", "cesare.aurelio@yahoo.it"];

// scansiono l'array e controllo che l'email non esista già
var trovata = 0;
for (var i = 0; i < email.length; i++) {
if (emailUtente == email[i]) {
trovata = 1;
}
}

if (trovata == 1) {
	alert("Email valida, accesso effettuato.");
}
else {
    alert("Email non registrata. Effettua la registrazione.");
}
