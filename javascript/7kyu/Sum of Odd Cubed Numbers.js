function cubeOdd(arr) {
    let result=0;
     for(let i=0;i<arr.length;i++){
       if(isNaN(arr[i])) return undefined
       if(arr[i] % 2 !== 0){
         result+=(arr[i]*arr[i]*arr[i])
       }
     }
     return result
   }