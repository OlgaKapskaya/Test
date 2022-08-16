function contamination(text, char){
  if (text != "" && char!= ""){
    return char.repeat(text.length);
  } else {return ""};
}