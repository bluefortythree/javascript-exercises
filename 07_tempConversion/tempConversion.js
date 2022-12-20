const convertToCelsius = function(degrees) {
  let celcius = (degrees - 32) * 5/9;
  if(Number.isInteger(celcius)) {
    return celcius
  } else {
    return +celcius.toFixed(1) // the + makes it a number, why does it return as a string in the first place? 
  }
};

const convertToFahrenheit = function(degrees) {
  let fahrenheit = (degrees * 9/5) + 32;
  if(Number.isInteger(fahrenheit)) {
    return fahrenheit
  } else {
    return +fahrenheit.toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
