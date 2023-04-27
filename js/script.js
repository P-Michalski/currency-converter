{
    const calculateResult = (amount, currency) => {
        const usd = 0.24;
        const jpy = 31.96;
        const gbp = 0.19;
        const eur = 0.21;

        switch (currency) {
            case "USD":
                return amount * usd;
            case "EUR":
                return amount * eur;
            case "JPY":
                return amount * jpy;
            case "GBP":
                return amount * gbp;
        }

    };

    const updateResultText = (amount, result, currency) => {
        const resultText = document.querySelector(".js-formResult");
        resultText.innerText = `${parseFloat(amount)} PLN to ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const inputValue = document.querySelector(".js-formPLN");
        const selectedCurrency = document.querySelector(".js-formSelectedCurrency");

        const amount = inputValue.value;
        const currency = selectedCurrency.value;
        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}