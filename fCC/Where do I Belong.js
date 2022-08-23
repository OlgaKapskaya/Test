function getIndexToIns(arr, num) {

    let index = 0;
    arr.sort((a,b) => a - b );
    console.log(arr);
    if (arr != []){
    for (let i=0; i<arr.length; i++){
      if (arr[i]>num){
        index = i;
        return index;
      } else if (arr[i] == num){
        index = i;
        return index;
      } else if (num > arr[i]){
        index = i+1;
      }
    }
    } 
    return index;
    }
    
    
    console.log(getIndexToIns([10, 20, 30, 40, 50], 35));