// elementi input DOM
const kmElem = document.getElementById("km");

const etaElem = document.getElementById("età");

const FormElem = document.getElementById("form");




FormElem.addEventListener("submit", handlefrom);

function handlefrom(event) {
    event.preventDefault();

// valori elementi input DOM
const km = kmElem.value;

const eta = etaElem.value;



/* ESECUZIONE LOGICA */

const totalPrice = km * 0.21;

let result;

if (eta < 18) {
    const discount20 = (totalPrice * 20) / 100;
    
    result = totalPrice - discount20;
    
} else if (eta >= 65) {
    const discount40 = (totalPrice * 40) / 100;

    result = totalPrice - discount40; 

} else {
    result = totalPrice;
    
}


/* OUTPUT */

const message = `Il prezzo del biglietto è ${result.toFixed(2)}€`;
console.log(message);


// resetto i campi
FormElem.reset();

}


