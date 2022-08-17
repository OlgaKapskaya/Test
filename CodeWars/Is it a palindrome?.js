function isPalindrome(x) {
    let arr1 = [];
    for (let i=0; i<x.length; i++){
      arr1.push(x[i]);
    }
    let str = arr1.reverse().join("");
    if (str.toUpperCase()==x.toUpperCase()) {return true;}
    else {return false;}
  }