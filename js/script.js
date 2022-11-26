{
    const calculateResult = (sum, currency) => {
        const rateEUR = 4.6827;
        const rateGBP = 5.3367;
        const rateUSD = 4.9823;
        const rateCHF = 4.8172;
        switch (currency) {
            case "EUR":
                return sum / rateEUR;

            case "GBP":
                return sum / rateGBP;

            case "USD":
                return sum / rateUSD;

            case "CHF":
                return sum / rateCHF;

        }
    };

    const updateResultText = (sum, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${sum.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
    }
    const onFormSubmit = () => {
        event.preventDefault();

        const sumElement = document.querySelector(".js-sum");
        const currencyElement = document.querySelector(".js-currency");


        const sum = +sumElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(sum, currency)

        updateResultText(sum, result, currency);
    }

    const init = () => {
        const formElemnt = document.querySelector(".js-form");
        formElemnt.addEventListener("submit", onFormSubmit);
    };

    init();
}