// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature () {
      return (this.fahrenheit - 32) * 5/9
    }
  
    set temperature (celsius) {
      this.fahrenheit = celsius * 9.0 / 5 + 32
  
    }
  
  }
  
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   console.log(thermos);
  let temp = thermos.temperature; // 24.44 in Celsius
//   console.log((temp));
  thermos.temperature = 29;
  temp = thermos.temperature; // 26 in Celsius
  console.log(temp);