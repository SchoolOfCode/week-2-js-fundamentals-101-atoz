<<<<<<< HEAD
function convertGBPtoEUR(pounds) {
    return pounds * 1.21;
}
=======
//Write a JavaScript function `convertGBPtoEUR` *

function convertGBPtoEUR(pounds){
  return pounds * 1.21; 
}
 console.log(convertGBPtoEUR(5));

 //that takes in a specified amount in £ *
 //converts it to € using a given exchange rate. *
 // The function should return the converted amount. *

 //Write another function `convertGBPtoUSD` *
>>>>>>> 3a2681f99652b1a7a4bd1b458c1c0252cf225c7b

function convertGBPtoUSD(pounds) {
    return pounds * 1.27;
}

<<<<<<< HEAD
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
=======
console.log(convertGBPtoUSD(5));

//that takes in a specified amount in £,*
//and converts it to $ using a given exchange rate.*
//It should behave in a very similar way to the previous function.*

//MVP3
//Write a function `convertGBPToCurrency`* 

let EUR = 1.21
let USD = 1.27

function convertGBPToCurrency(currencyCode, amount) {
    //return currencyCode * amount
    //return convertGBPtoUSD(amount);
    if (currencyCode == "USD"){
      return convertGBPtoUSD(amount);
    } else if (currencyCode == "EUR"){
      return convertGBPtoEUR(amount);
    }

}

console.log(convertGBPToCurrency("EUR", 5));
//which takes in both a currency code (`"EUR"` or `"USD"`) *
//and an amount of £ to convert. *

// It should, based on which code has been entered, use one of your previously written functions to return the correct conversion. *
//If an unknown code is entered, it should return `null`.
>>>>>>> 3a2681f99652b1a7a4bd1b458c1c0252cf225c7b
