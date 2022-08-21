function forecast(arr) {
    let newForecast = arr.slice(2,4);
  
    return newForecast;
  }
  
  
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));