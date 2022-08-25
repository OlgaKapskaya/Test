function howMuchILoveYou(n) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let index = 0;
  
    if (n<=6) { 
      return arr[n-1];
    } else {
  
    for (let i=0; i<n; i++){
      index++;
      if (index>6){index = 0} 
    }
    return arr[index];
    }
}

