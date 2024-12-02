// ### **Temperature Display for a Gym's Sauna**

// A local gym, FitLife, is looking to enhance their sauna experience based on member feedback. They are a unique gym, with a 50:50 British:American ratio of members 🤷‍♂️. They observed members using the facilities, and found that they stayed on average only 1 minute and 6 seconds inside the sauna (not what they expected), and they were keen to increase this as soon as possible. They conducted a survey to understand how they could improve, and here's some of the comments:

// - “When I walk in, it feels hot - I can’t tell how hot it is, so I panic and walk out”
// - “If there was a bar inside the sauna, that would be cool”
// - “I’m never sure of the temperature - plus because half of the people are American and half are British, some use Celsius and some use Fahrenheit so we’re never sure how to communicate with each other anyway”
// - “It’s scary not to know the temperature”
// - “Given that I never know how hot it is, a timer would be good”

// Solve the problem for the gym.

// ### Plan

// {/* <summary>MVP 1</summary> */}
  
// Develop a JavaScript function `displayTemperatureInCelsius` *
//  that takes in a numerical Fahrenheit temperature reading *
//  and converts it to Celsius*
// , returning the number representing the Celsius value.*

/* <summary>MVP 2</summary>
  
Implement another function `displayTemperatureInFahrenheit` that performs the inverse operation.
</details>
<details>
<summary>MVP 3</summary>*/

function displayTemperatureInCelsius(fahrenheit) {
  return (fahrenheit - 30) / 2 ;
}    

console.log(displayTemperatureInCelsius(60));

function displayTemperatureInFahrenheit(celsius) {
  return celsius * 2 + 30;
}    

console.log(displayTemperatureInFahrenheit(15));

let = temperatureUnit = "celsius";

function toggleTemperatureDisplay() {
  return displayTemperatureInCelsius(60);
}

console.log(toggleTemperatureDisplay());

// Create a function `toggleTemperatureDisplay` *
// return either Celsius or Fahrenheit depending on which was the last returned (if the last value returned was Fahrenheit, then you’ll want to return Celsius and vice versa). 
//  Start with a default of the last returned format being Celsius.

//  </details> */}
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