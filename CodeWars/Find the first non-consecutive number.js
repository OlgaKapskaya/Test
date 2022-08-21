function firstNonConsecutive (arr) {
    for (let i=0; i<arr.length; i++){
      if (arr[i+1]-1 != arr[i]){
        return arr[i+1];
      }
    }
      return null;
    }