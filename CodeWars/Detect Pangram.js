function isPangram(string){
    let alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str = string.toUpperCase().split("");
    let abc = alf.split("");
    let count = 0;
    
    for (let i=0; i<abc.length; i++){
      if (str.includes(abc[i], 0)){
        count++;
      }
    }
    
    if (count == abc.length){
      return true;
    } else {
      return false;
    }
  }