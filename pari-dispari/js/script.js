// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// FUNZIONI

//questa funzione prende un numero "max" e restituisce un numero casuale da 1 a max
function generateRandomInteger(max) {
    return(Math.floor(Math.random() * max) + 1);
}

//questa funzione prende un numero "number" e restituisce true se pari, false se dispari
function isEven(number) {
    if (number % 2 === 0) {
        return(true);
    } else {
        return(false);
    }
}

// Creiamo un array con le 2 risposte che vogliamo accettare nel prompt di "pari o dispari".
const acceptableEvenOdd = ['pari','dispari'];


// Chiediamo all'untente se vuole pari o dispari.
let userEvenOdd = prompt('pari o dispari?');
//controlliamo l'imput dell'utente. Se non è nell'array delle risposte accettate, andiamo in loop
//finché non scrive quello che vogliamo.
while (!acceptableEvenOdd.includes(userEvenOdd.toLocaleLowerCase()) ) {
    alert('devi scrivere "pari" o "dispari');
    userEvenOdd = prompt('pari o dispari?');
}

// trasformiamo la stringa che ci ha dato l'utente in un valore booleano (true se ha scelto "pari", false se ha scelto "dispari")
let userPickedEven;
if (userEvenOdd === 'pari') {
    userPickedEven = true;
} else {
    userPickedEven = false;
}


// discorso simile per l'input del numero intero da 1 a 5
let userNumber = parseInt(prompt('dimmi un numero da 1 a 5'));
while (isNaN(userNumber)|| userNumber % 1 !== 0 || userNumber < 1 || userNumber > 5) {
    alert('devi scrivere un numero intero da 1 a 5');
    userNumber = parseInt(prompt('dimmi un numero da 1 a 5'));
}

//generiamo un numero a caso tra 1 e 5 con la nostra funzione 
let computerNumber = generateRandomInteger(5);

let gameSum = userNumber + computerNumber;
console.log(`Hai scelto ${userEvenOdd}. Il tuo numero è ${userNumber}. Il mio numero è ${computerNumber}. La loro somma è ${gameSum}`)

if (isEven(gameSum) === userPickedEven) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}

