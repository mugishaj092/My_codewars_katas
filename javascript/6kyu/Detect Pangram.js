function isPangram(string){
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');
    let found=true
    alphabetArray.map((char)=>{
      if(!string.toLowerCase().includes(char)){
          console.log(char)
        found=false
      }
    })
    return found
  }