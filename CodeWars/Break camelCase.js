function solution(string) {
    let arr = string.split("");
    let str="";
    let rezArr = [];
      for (let i=0; i<arr.length; i++){
        
        
        if (arr[i] == arr[i].toUpperCase()){
          rezArr.push(str);
          str = "";
        }
        
        str+=arr[i];
        //console.log(str);
      }
    rezArr.push(str);
    return rezArr.join(" ");
  }
  console.log(solution('camelCasing'));
  
  
  