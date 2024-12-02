function convertGBPtoEUR(pounds) {
    return pounds * 1.21;
}

function convertGBPtoUSD(pounds) {
    return pounds * 1.27;
}

function convertGBPtoCurrency(pounds, currency) {
    // if (currency == "EUR") {
    //     return convertGBPtoEUR(pounds);
    // } else if (currency == "USD") {
    //     return convertGBPtoUSD(pounds);
    // } else {
    //     "Wrong currency input";
    // }
    switch (currency) {
        case "EUR":
            return convertGBPtoEUR(pounds);
        case "USD":
            return convertGBPtoUSD(pounds);
        default:
            return "Wrong currency input";
    }
}

const amountToConvert       = 10;       // amount in GBP
const currencyToConvertInto = "USD";    // "EUR" or "USD"
console.log(currencyToConvertInto, convertGBPtoCurrency(amountToConvert, currencyToConvertInto));
