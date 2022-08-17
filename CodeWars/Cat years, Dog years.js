var humanYearsCatYearsDogYears = function(humanYears) {
    let arr=[];
      let cat=0;
      let dog=0
      if (humanYears==1){
        dog=15;
        cat=15;
      } else if(humanYears==2){
        dog=15+9;
        cat=15+9;
      } else if(humanYears>2){
        dog=15+9+(humanYears-2)*5;
        cat=15+9+(humanYears-2)*4;
      }
      arr.push(humanYears);
      arr.push(cat);
      arr.push(dog);
      return arr;
    }
    
    