function solution(a, b){
    if (a.length<b.length){
      return a+b+a;
    } else if (b.length < a.length){
      return b+a+b;
    }
  }
  
  