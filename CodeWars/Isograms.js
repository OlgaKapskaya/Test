function isIsogram(str){
    let arr = str.toLowerCase().split("").sort();
    let count = 0;
    for (let i=0; i<arr.length; i++){
      if (arr[i]==arr[i+1]){
        count++;
      }
    }
    if (count == 0){ return true;}
    else {return false;}
    
  }