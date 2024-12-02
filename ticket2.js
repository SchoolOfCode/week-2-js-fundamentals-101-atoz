// ### Plan

// <summary>MVP 1</summary>
  
// Develop a JavaScript function `displayTemperatureInCelsius` *
// that takes in a numerical Fahrenheit temperature reading *
// convert it to Celsius *
// return the number representing the Celsius value. *

// <summary>MVP 2</summary>
  
// Implement another function `displayTemperatureInFahrenheit` that performs the inverse operation. *

// <summary>MVP 3</summary>

// Create a function `toggleTemperatureDisplay` *
// return either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). *
//  Start with a default of the last returned format being Celsius. *

const cels = " Celsius";
const fahr = " Fahrenheit";

function displayTemperatureInCelsius(fahrenheit) {
  return (fahrenheit - 30) / 2 + cels;
}      

// console.log(displayTemperatureInCelsius(60));

function displayTemperatureInFahrenheit(celsius) {
  return celsius * 2 + 30 + fahr;
}      

// console.log(displayTemperatureInFahrenheit(15));

let temperatureUnit = fahr;    // starting format

function toggleTemperatureDisplay(degrees) {
  if (temperatureUnit === fahr) {
    temperatureUnit = cels;
    return displayTemperatureInCelsius(degrees);
  } else if (temperatureUnit === cels) {
    temperatureUnit = fahr;
    return displayTemperatureInFahrenheit(degrees);
  } else {
    return "Error";
  }
}  

console.log(toggleTemperatureDisplay(70));

/*function toggleTemperatureDisplay() {
  // Closure to maintain the state of the last returned temperature format
  let lastFormat = "Celsius"; // Default to Celsius
  return function() {
    // Toggle the format
    lastFormat = lastFormat === "Celsius" ? "Fahrenheit" : "Celsius";
    return lastFormat;
  };
}
// Usage example
const toggle = toggleTemperatureDisplay();

for (let index = 0; index < 10; index++) {
  console.log(toggle()); // "Fahrenheit" (toggles from default "Celsius")
  // console.log(toggle()); // "Celsius"
  // console.log(toggle()); // "Fahrenheit"
  // console.log(toggle());
}
*/
