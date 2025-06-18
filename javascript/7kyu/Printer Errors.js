function printerError(s) {
    let totalColor=s.length;
    let totalError=0;
    let alphabetics="a b c d e f g h i j k l m";
    s.split("").map((char,index)=>{
      if(alphabetics.includes(char)){
      }
      else{
        totalError++;
      }
    })
    
    return `${totalError}/${totalColor}`
  }