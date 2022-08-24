function mutation(arr) {
    let str1 = arr[0].toUpperCase();
    let str2 = arr[1].toUpperCase();
    let count = 0;
  
    label: for (let i=0; i<str1.length; i++){
      for (let j=0; j<str2.length; j++){
        if (str1[i] == str2[j]){
          count ++;
          continue label;
        }
      }
    }
    if (count == str2.length){
      return true;
    } else return false;
  
  }
  
  mutation(["floor", "for"]);