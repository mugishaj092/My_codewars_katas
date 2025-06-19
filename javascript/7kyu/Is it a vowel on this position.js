function checkVowel(string, position) {
    const vowels=["a", "e", "i", "o", "u"]
    if(vowels.includes(string.toLowerCase()[position])){
      return true
    }else if(position<0){
        return false
      }
    else if(position.length===0){
        return false
      }
    else{
      return false
    }
  };
  