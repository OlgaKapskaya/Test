function removeSmallest(numbers) {
    let arr = numbers.slice();
    console.log(arr);
    let numMin = arr[0];
    
    for (let i=0; i<arr.length; i++){
      if (numMin > arr[i]){
        numMin = arr[i];
      }
    }
    console.log(numMin);
    let index = arr.indexOf(numMin);
    console.log(index);
    let arr2 = arr.splice(index, 1);
    return arr;
  }