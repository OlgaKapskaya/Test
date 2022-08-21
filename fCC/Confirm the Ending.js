function confirmEnding(str, target) {
    let strLength = str.length;
    let targetLength = target.length;
    if (str.slice(strLength-targetLength, strLength) == target){
      return true;
    } else {
      return false;
    }
  }
  
  confirmEnding("Bastian", "n");
  console.log(confirmEnding("Bastian", "n"));