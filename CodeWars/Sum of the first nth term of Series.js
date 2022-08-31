function SeriesSum(n)
{
  if (n == 0){
    return "0.00";
  } else {
  
  
  let rez = 1;
  let i=2;
  let x=4;
  while (i<=n){
    rez+=1/x;
    x+=3;
    i++;
  }
  return rez.toFixed(2);
  }
}