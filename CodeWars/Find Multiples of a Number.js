function findMultiples(integer, limit) {
    let rez = [];
    for (let i=integer; i<=limit; i++){
      if (i%integer == 0){
        rez.push(i);
      }
    }
    return rez;
  }
  
  