function sumAll(arr) {
    let sum = 0;
    let arr1 = arr.slice().sort((a,b) => a-b);
    console.log(arr1);
    for (let i = arr1[0]; i<=arr1[arr1.length-1]; i++){
      sum += i;
    }
    return sum;
  }
  
  sumAll([4, 1]);