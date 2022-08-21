function factorialize(num) {
    let rez = 1;
    for (let i=2; i<=num; i++){
      rez*=i;
    }
    return rez;
  }
  
  factorialize(5);