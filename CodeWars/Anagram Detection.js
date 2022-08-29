// write the function isAnagram
var isAnagram = function(test, original) {
    let str1 = test.toLowerCase().split('').sort().join("");
    let str2 = original.toLowerCase().split('').sort().join("");
    console.log(str1);
    console.log(str2);
     if (str1 == str2) {
       return true;
     } else return false;
    
    
  };