function truncateString(str, num) {
   // let rez = "";
    if (str.length<=num){
      return str;
      }
    else { 
      return str.slice(0, num)+"..."
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));