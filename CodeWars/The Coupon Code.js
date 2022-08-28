function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let curDate = new Date(currentDate);
    let dateE = new Date(expirationDate);
    
    if (enteredCode != correctCode){
      return false;
    } else if (curDate>dateE){
      return false;
    } else return true;
    
  }