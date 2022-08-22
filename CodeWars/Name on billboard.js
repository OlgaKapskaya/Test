function billboard(name, price = 30){
    let summ = 0;
    for (let i=0; i<name.length; i++){
      summ+=price;
    }
    return summ;
  } 