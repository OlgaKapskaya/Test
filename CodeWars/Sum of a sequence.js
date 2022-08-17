function sequenceSum(begin, end, step) {
    let summ=0;
    let i=begin;
    if (end>=begin){
    while (i <= end){
     summ+=i;
     i+=step;
    }
    }
    return summ;
  };