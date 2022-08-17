function solution(str, ending){
    let testStr = ending+'$';
    if (str.match(testStr)) {
    return true
    } else return false;
    }