function factorial(n) {
    let rez = 1;
    if (n == 0){
      return 1;
    } else if ((n<0) || (n>12)){
      throw new RangeError('Параметр должен быть между 0 и 12');
    } else {
      for (let i=1; i<=n; i++){
        rez *= i;
      }
    }
      return rez;
    }