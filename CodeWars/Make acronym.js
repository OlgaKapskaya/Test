function toAcronym(inp){
    let rez = inp[0];
    for (let i=0; i<inp.length; i++){
      if (inp[i]==" "){
        rez+=inp[i+1];
      }
    }
    return rez.toUpperCase();
  }