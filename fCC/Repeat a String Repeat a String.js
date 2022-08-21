function repeatStringNumTimes(str, num) {
    let rez = "";
    if (num>0){
        for (let i=0; i<num; i++){
          rez+=str;
        }
    } else {return "" ;}
    return rez;
  }
  
  repeatStringNumTimes("abc", 3);
  console.log(repeatStringNumTimes("abc", 3));