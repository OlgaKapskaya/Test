function arrange(s) {
    let rez = s.slice();
    let t = [];
    let start = 0;
    let end = rez.length-1;
    
    while(start<=end){
      if (start == end){
        t.push(rez[start]);
        start++;
        end--;
      } else if (start %2 == 0){
      t.push(rez[start]);
      t.push(rez[end]);
      start++;
      end--;
      } else {
      t.push(rez[end]);
      t.push(rez[start]);
      start++;
      end--;
        }
    }
    
    return t;
  }
  
  