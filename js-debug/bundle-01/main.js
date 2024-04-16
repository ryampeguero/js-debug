/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
// Stampare il contatore i per 5 volte in console
// Non ci sono errori di sintassi
// Il ciclo non parte mai perché la condizione non è soddisfatta, e anche se lo fosse sarebbe un ciclo infinito
//Soluzione
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }
//Questa funzione vuole sommare 5 a ogni numero pari che gli viene passato come argomento
//Si c'è un errore di sintassi all'interno della condizione if
//Non ci sono errori logici
//Soluzione
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
// Questa funzione vuole creare un piccolo loop di cinque iterazioni
//E' presente un errore di sintassi all'interno dei parametri del ciclo for viene utilizzata la virgola al posto del punto e virgola
//Non ci sono errori di logici
//Soluzione
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


//Questa funzione vuole stampare i numeri pari all'interno dell'array mumbers
//Errore di sintassi sono in riga 64 c'è un punto e virgola alla fine, in riga 65 dobbiamo fare il controllo con numbers[i] e c'è solo un = quando dovrebbero essere due per la condizione di uguaglianza e anche togliere il punto e virgola. Infine in nella riga 66 dobbiamo passargli il valore di numbers[i] non solo i

//Errori logici sono presenti nella condizione del ciclo for utilizzando il minore "<" non ci serve scrivere numbers.length - 1 in questo modo saltiamo il controllo in una cella dell'array, poi il return bisogna farlo alla fine della funzione fuori dal ciclo se il ciclo termina alla prima iterazione. E infine le variabili essendo utilizzate solo quando viene richiamata la funzione possono essere dichiarate come const.
//Soluzione
function displayEvenNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log("ciao", displayEvenNumbers());
 // dovrebbe restituire [2,4,6,8]