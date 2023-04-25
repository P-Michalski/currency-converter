let form = document.querySelector(".js-form");
let resultText = document.querySelector(".js-formResult");
let inputValue = document.querySelector(".js-formPLN");
let selectedCurrency = document.querySelector(".js-formSelectedCurrency");

let usd = 0.24;
let jpy = 31.96;
let gbp = 0.19;
let eur = 0.21;
let result;
let currencyText;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (selectedCurrency.value) {
        case "USD":
            result = (inputValue.value * usd).toFixed(2);
            currencyText = "dolarów";
            break
        case "EUR":
            result = (inputValue.value * eur).toFixed(2);
            currencyText = "Euro";
            break
        case "JPY":
            result = (inputValue.value * jpy).toFixed(2);
            currencyText = "jenów";
            break
        case "GBP":
            result = (inputValue.value * gbp).toFixed(2);
            currencyText = "funtów";
            break
    }
    resultText.innerText = `${parseFloat(inputValue.value)} PLN to ${result} ${currencyText}`
});