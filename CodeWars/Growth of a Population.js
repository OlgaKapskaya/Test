function nbYear(p0, percent, aug, p) {
    let sum = p0;
    let count=0;
  while (sum<p){
    sum+=(sum/100*percent)+aug;
    count++;
  }
    return count;
  }