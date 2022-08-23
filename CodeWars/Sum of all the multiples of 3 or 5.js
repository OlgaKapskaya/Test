function findSum(n) {
    let summ = 0;
    let number = 1;
    
    while (number <= n){
      if ((number%3 == 0) || (number%5 == 0)){
        summ+=number;
        
      }
      number++;
    }
    return summ;
  }