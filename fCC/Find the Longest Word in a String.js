function findLongestWordLength(str) {
    let arr = str.split(" ");
    let rez = arr[0];
    for (let i=0; i<arr.length; i++){
      if (arr[i].length>rez.length){
        rez = arr[i];
      }
    }
      return rez.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");