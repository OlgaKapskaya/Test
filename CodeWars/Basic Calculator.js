function calculate(num1, operation, num2) {
    let rez = 0;
    if (operation =="+"){
      rez = num1+num2;
    } else if (operation =="-"){
      rez = num1-num2;
    } else if (operation =="*"){
      rez = num1*num2;
    } else if ((operation =="/") && (num2==0)) {
      return null;
    } else if (operation =="/"){
      return num1/num2;
    } else {return null;}
    return rez;
  }