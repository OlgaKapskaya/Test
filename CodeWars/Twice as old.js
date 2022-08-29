function twiceAsOld(x, y) {
    let years = 0;
  if (x/y == 2){
    years = 0;
  } else if (x / y >2){
    while (x/y != 2){
      x++;
      y++;
      years++;
    }
  } else {
      while (x/y != 2){
      x--;
      y--;
      years++;
    }
  }
    
    return years;
  }