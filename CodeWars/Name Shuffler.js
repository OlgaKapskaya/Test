function nameShuffler(str){
    let arr = str.split(" ");
    let name = arr[1];
    arr[1] = arr[0];
    arr[0] = name;
    return arr.join(" ");
  }