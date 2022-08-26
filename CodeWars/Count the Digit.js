function nbDig(n, d) {
    let rezStr = "";
    let count=0;
    
    for (let k=0; k<=n; k++){
      rezStr+=Math.pow(k, 2);
    }
    
    for (let i=0; i<rezStr.length; i++){
      if (Number(rezStr[i])==d){
        count++;
      }
    }
    return count;
  }