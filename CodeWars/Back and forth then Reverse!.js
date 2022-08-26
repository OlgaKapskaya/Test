function arrange(s) {
    let rez = s.slice();
    let t = [];
    
    while(rez.length>0){
      if (rez.length>1){
      
      t.push(rez[0]);
      t.push(rez[rez.length-1]);
      rez.pop();
      rez.shift();
      rez.reverse();
        } else {
      t.push(rez[0]);
      rez.pop();
      rez.shift();
      rez.reverse();
        }
    }
    return t;
  }
  
  