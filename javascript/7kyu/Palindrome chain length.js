var palindromeChainLength = function(number) {
    const isPalindrome=(n)=>{
      if(n.toString().split("").reverse().join("")==n){
        return true;
      }else false
    }
    
    let steps=0;
    while(!isPalindrome(number)){
      number+=Number(number.toString().split("").reverse().join(""));
      steps++
    }
    return steps
  };