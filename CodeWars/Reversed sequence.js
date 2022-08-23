const reverseSeq = n => {
    let rez = [];
    
    for (let i=n; i>0; i--){
      rez.push(i);
    }
    return rez;
  };