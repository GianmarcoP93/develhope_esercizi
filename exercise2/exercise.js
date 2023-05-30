function repeatHello(callback, n) {
  let id = setInterval(callback, 900);
  setTimeout(() => clearInterval(id), 1000 * n);
}

repeatHello(() => console.log("Hello!"), 5);

//Per prima cosa ho scritto una funzione "repeatHello", dopodicchè ho dichiarato una variabile "id" e creato un setinterval, che prende come parametri "callback" e il tempo di intervallo tra
//una stampa e un'altra. Dopodicchè per ovviare al problema che le stampe in questo caso sarebbero state a intermittenza di 1 secondo ma con una durata infinita ho creato una funzione
//setTimeout utilizzando un arrow function con una funzione clearInterval che prende come parametro l'id dichiarato in precedenza e ciò che fa' è di mandare la prima stampa
//dopo 1 secondo e terminarla dopo 5 secondi. Per far terminare la stampa dopo 5 secondi ho dichiarato un'altro parametro alla funzione madre (n) e dichiarato n = 5.
//Quindi, 1000ms *5 = 5000ms e sarà il tempo nel quale il setinterval stamperà, ed essendo che stamperà ogni 900ms setInterval stamperà un totale di 5 volte.
