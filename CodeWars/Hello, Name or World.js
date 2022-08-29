function hello(name) {
    let x ='';
    if (name != "" && name != null){
    for (let i=0; i<name.length; i++){
      if (i>0){
        x+=name[i].toLowerCase();
      } else {
        x+=name[i].toUpperCase();
      }
    }
    
    return `Hello, ${x}`+'!';
      } else {
        return "Hello, World!";
      }
  }