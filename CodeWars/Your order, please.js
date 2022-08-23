function order(words){
    let arr = words.split(" ");
    console.log(arr);
    let rez = arr.slice();
    let index = 0;
    let strI = "";
    let str = "";
    
    for (let i=0; i<arr.length; i++){
      strI = arr[i].match(/\d/);
      str = arr[i];
      index = Number(strI)-1;
      rez[index]=str;
    }
    
    return rez.join(' ');
  }
  
  
  