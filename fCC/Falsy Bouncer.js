function bouncer(arr) {
    let rez = [];
    for (let i=0; i<arr.length; i++){
      if (arr[i]){
       rez.push(arr[i]);
      }
    }
    return rez;
  }
  
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));