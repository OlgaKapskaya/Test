function divisibleBy(numbers, divisor){
    let rezNumbers = [];
  for (let i=0; i<numbers.length; i++){
    if (numbers[i]%divisor == 0){
      rezNumbers.push(numbers[i]);
    }
  }
    return rezNumbers;
  }