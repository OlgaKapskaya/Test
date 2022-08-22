function fakeBin(x){
    let newStr = x.replace(/[0-4]/g, "0");
    return newStr.replace(/[5-9]/g, "1");
  }