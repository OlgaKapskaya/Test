function largestOfFour(arr) {
    let rez = [];
    let num = [];
    let number;
    for (let i=0; i<arr.length; i++){
      num = arr[i];
      number = arr[i][0];
      for (let j=0; j<num.length; j++){
        if(number<num[j]){
          number = num[j];
        }
      }
      rez.push(number);
    
    }
    return rez;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);