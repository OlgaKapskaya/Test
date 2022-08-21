function doubleChar(str) {
    let arr = [];
    for (let i=0; i<str.length*2; i++){
      arr.push(str[i]);
      arr.push(str[i]);
    }
    return arr.join("");
  }
  
  