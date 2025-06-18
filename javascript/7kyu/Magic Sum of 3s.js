function magicSum(numbers) {
    let sum=0
    for(let i=0;i<numbers.length;i++){
      if(numbers[i].toString().includes('3') & numbers[i]%2!=0){
          sum+=numbers[i]
      }
    }
    console.log(sum)
    return sum
  }