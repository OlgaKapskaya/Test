function basicOp(operation, value1, value2) {
    switch(operation){
        case "+": return Number(value1)+Number(value2); break;
        case "-": return Number(value1)-Number(value2); break;
        case "*": return Number(value1)*Number(value2); break;
        case "/": return Number(value1)/Number(value2); break;
    }
  }