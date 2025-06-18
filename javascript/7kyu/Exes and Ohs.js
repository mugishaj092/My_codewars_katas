function XO(str) {
    let countO=0;
    let countX=0;
    for(let i=0;i<str.length;i++){
      if(str[i].toLowerCase()=='o'){
        countO++
      }
      else if(str[i].toLowerCase()=='x'){
        countX++
      }
    }
    
    if(countO==countX){
      return true
    }else{
      return false
    }
  }