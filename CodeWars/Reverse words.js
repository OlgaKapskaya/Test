function reverseWords(str) {
    let arr = str.split(" ");
    let rez="";
    for (let i=0; i<arr.length; i++){
     let str2 = Array.prototype.map.call(arr[i], (x) => x).reverse().join("");
    rez+=str2+" ";
    }
   return rez.trimEnd();
  }