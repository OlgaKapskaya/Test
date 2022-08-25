function htmlspecialchars(formData) {
    let arr = formData.split("");
    for (let i=0; i<arr.length; i++){
      switch (arr[i]){
          case "<": arr[i] = "&lt;"; break;
          case ">": arr[i] = "&gt;"; break;
          case '"': arr[i] = "&quot;"; break;
          case "&": arr[i] = "&amp;"; break;
      }
    }
    return arr.join("");
  }