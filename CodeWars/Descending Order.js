function descendingOrder(n){
    let arr = String(n).split("");
    arr.sort(function(a, b) {
    return b - a;
  });
    return Number.parseInt(arr.join(""))
  }