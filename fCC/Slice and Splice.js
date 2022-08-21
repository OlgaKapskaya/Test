function frankenSplice(arr1, arr2, n) {
    let rez = [];
    for (let i=0; i<n; i++){
      rez.push(arr2[i]);
    }
    for (let j=0; j<arr1.length; j++){
      rez.push(arr1[j]);
    }
    for (let k=n; k<arr2.length; k++){
      rez.push(arr2[k]);
    }
    return rez;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  console.log(frankenSplice([1, 2, 3], [4, 5], 1));