console.log("Witam na moim kantorze walut");

let formElemnt = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-sum");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6827;
let rateGBP = 5.3367;
let rateUSD = 4.9823;
let rateCHF = 4.8172;


formElemnt.addEventListener("submit", (event) => {
    event.preventDefault();

    let sum = +sumElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = sum / rateEUR;
            break;
        case "GBP":
            result = sum / rateGBP;
            break;
        case "USD":
            result = sum / rateUSD;
            break;
        case "CHF":
            result = sum / rateCHF;
            break;
    }

    resultElement.innerHTML = `${sum.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
});
