// elementi input DOM

const btnAnnulla = document.getElementById("btn-annulla");

const titleBiglietto = document.getElementById("title-biglietto");

const cardBiglietto = document.querySelector(".card-biglietto");

const kmElem = document.getElementById("km");

const etaElem = document.getElementById("età");

const fullName = document.getElementById("full-name");

const FormElem = document.getElementById("form");



// elementi della card da compilare
const nameUser = document.querySelector("#card-body-passeggero h4")

const prezzoBiglietto = document.getElementById("costo-biglietto");

const numCarrozza = document.getElementById("num-carrozza");

const codiceCP = document.getElementById("codice-cp");

const sconto = document.getElementById("offerta")








/******** **********/
FormElem.addEventListener("submit", handlefrom);

function handlefrom(event) {
    event.preventDefault();

cardBiglietto.classList.remove("d-none");
titleBiglietto.classList.remove("d-none");

    

// valori elementi input DOM
const km = kmElem.value;

const eta = etaElem.value;

const fullNameUser = fullName.value;



/* ESECUZIONE LOGICA */

const totalPrice = km * 0.21;

let result;

if (eta < 18) {
    const discount20 = (totalPrice * 20) / 100;
    
    result = totalPrice - discount20;
    sconto.innerHTML = "20%";
} else if (eta >= 65) {
    const discount40 = (totalPrice * 40) / 100;

    result = totalPrice - discount40; 
    sconto.innerHTML = "40%";
} else {
    result = totalPrice;
    sconto.innerHTML = "-";
}


/* OUTPUT */

const message = `Il prezzo del biglietto è ${result.toFixed(2)}€`;
console.log(message);



// stampo i valore in pagina
nameUser.innerHTML = fullNameUser.toUpperCase();

prezzoBiglietto.innerHTML = `${result.toFixed(2)}€`;

numCarrozza.innerHTML = Math.floor(Math.random() * 15) + 1;

codiceCP.innerHTML = Math.floor(Math.random() * 100000) + 10000;



// resetto i campi
FormElem.reset();

}


btnAnnulla.addEventListener("click", function() {

    cardBiglietto.classList.add("d-none");

    titleBiglietto.classList.add("d-none");

});