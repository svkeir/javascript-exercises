const convertToCelsius = function(tempF) {
  return Math.round((tempF - 32) * (5 / 9) * 10) / 10;

};

const convertToFahrenheit = function(tempC) {
     return Math.round(((tempC * 9) / 5 + 32) * 10) / 10;
}
  

// (tempC × 9/5) + 32 = 32°F (to Fahrenheit)

//(tempF − 32) × 5/9 = -17.78°C (to Celsius)

// originalNumber.toFixed(1) (to round to one decimal)



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
