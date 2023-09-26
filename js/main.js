// Otteniamo l'elemento HTML con l'ID 'inputext' e lo assegniamo a 'result'
let result = document.getElementById('inputext');

// Aggiunge un numero all'input
let calculate = (number) => {
    result.value += number;
}

// Calcola il risultato dell'espressione inserita
let Result = () => {
    try {
        result.value = eval(result.value);
    } catch (err) {
        // Messaggio di avviso in caso di errore
        alert('Inserisci un input valido!');
    }
}

// Cancella l'input
function clr() {
    result.value = '';
}

// Elimina l'ultimo carattere dall'input
function del() {
    result.value = result.value.slice(0, -1);
}