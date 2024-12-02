//Write a JavaScript function `convertGBPtoEUR` *

function convertGBPtoEUR(pounds){
  return pounds * 1.21; 
}
 console.log(convertGBPtoEUR(5));

 //that takes in a specified amount in £ *
 //converts it to € using a given exchange rate. *
 // The function should return the converted amount. *

 //Write another function `convertGBPtoUSD` *

function convertGBPtoUSD(pounds) {
    return pounds * 1.27;
}

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