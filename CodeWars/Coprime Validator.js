function isCoprime(x, y) {
    let delX=[];
    let delY=[];
    let count = 0;
    
    for (let i=0; i<=x; i++){
      if (x%i==0){
        delX.push(i);
      }
    }
    
    for (let j=0; j<=y; j++){
      if (y%j==0){
        delY.push(j);
      }
    }
    
  for (let k=0; k<delX.length; k++){
    for (let s=0; s<delY.length; s++){
      if (delX[k] == delY[s]){
        count++;
      }
    }
  }
      
    return (count == 1) ? true : false; 
  }