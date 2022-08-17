function wordsToMarks(string){
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  let rez=0;
  for (let i=0;i<string.length; i++){
    for (let j=0;j<abc.length;j++){
    if (string[i]==abc[j]){
      rez+=Number(count[j]);
    }
  }
  }
  return rez;
}