function noBoringZeros(n) {
    let arr = String(n).split("");
    let i = arr.length-1;
    
    while (arr[i] == 0){
      arr.pop();
      i--;
    }
    return Number(arr.join(""));
  }