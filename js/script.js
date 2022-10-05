/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 (dove il 21 è in questo caso l'età)
*/
let nomeUtente = prompt("Qual è il tuo nome ?");
let cognomeUtente = prompt("Qual è il tuo cognome ?");
let coloreUtente = prompt("Qual è il tuo colore preferito ?");
let etaUtente = prompt("Qual è la tua età ?");
let passwordUtente = nomeUtente + cognomeUtente + coloreUtente + etaUtente ;
document.getElementById("password").innerHTML = passwordUtente;

