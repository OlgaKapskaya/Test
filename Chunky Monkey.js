function chunkArrayInGroups(arr, size) {
    let rez = [];
  
    while (arr.length > 0){
      rez.push(arr.slice(0, size));
      for (let i=0; i<size; i++){
        arr.shift();
      }
    }
  return rez;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);