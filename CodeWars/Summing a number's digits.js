function sumDigits(number) {
    let str = String(number).match(/\d/g).join("");
    let summ = 0;
    
    for (let i=0; i<str.length; i++){
      summ+=Number(str[i]);
    }
    return summ;
  }
  
  