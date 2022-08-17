function abbrevName(name){
    let name1 = name[0];
    let name2 = "";
    for (let i=0; i<name.length; i++){
      if (name[i]==" ") {
        name2 = name[i+1];
        break;
      }
    }
    return name1.toUpperCase() +"."+name2.toUpperCase();
  }