// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let userInput = prompt('scrivi una parola o una frase e ti dirò se è palindroma');


// per capire se una stringa è palindroma, dobbiamo confrontarla con la versione invertita di se stessa.

//Funzione per invertire una stringa
function invertString(string) {
    let invertedString = '';
    for (let i = 0; i < string.length; i++) {
        invertedString = string[i] + invertedString;
    }
    return(invertedString);
}

function isPalindrome(string) {
    if (string === invertString(string)) {
        return(true);
    } else {
        return(false);
    }
}

console.log(`Hai scritto "${userInput}"`);
console.log(`Al contrario è "${invertString(userInput)}"`);

if (isPalindrome(userInput)) {
    console.log('HAI SCRITTO UN PALINDROMO!');
}
else {
    console.log('Non hai scritto un palindromo');
}