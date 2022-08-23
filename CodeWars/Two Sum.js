function twoSum(numbers, target) {
    let rez = [];
    for (let i=0; i<numbers.length; i++){
      for (let j=1; j<numbers.length; j++){
        if (numbers[i]+numbers[j] == target){
          rez.push(i);
          rez.push(j);
          return rez;
        } else continue;
      }
    }
  }