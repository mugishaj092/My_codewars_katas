function twoSort(s) {
    let sortedS=s.sort();
    let newS=sortedS[0].split('').map((item,index)=>{
      if(sortedS[0].length-1>index){
        return item+"***"
      }else{
        return item
      }
    })
    console.log(newS.join(''))
    return newS.join('')
  }