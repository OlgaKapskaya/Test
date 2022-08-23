function findShort(s){
    let arr = s.split(" ").sort((x,y) => x.length - y.length);
    return arr[0].length;
  }