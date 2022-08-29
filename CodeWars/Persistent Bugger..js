function persistence(num) {
    let arr = String(num).split("");
    let number = arr.reduce((sum, curent) => sum*curent, 1);
    //console.log(number);
    let rez = 1;
    
    if ((num == null) || (num<10)){
      return 0;
    } else {
      while(number>9){
        rez++;
        arr = String(number).split("");
        number = arr.reduce((sum, curent) => sum*curent, 1);
        //console.log(arr);
        //console.log(number);
      }
    }
    
    
    return rez;
  }