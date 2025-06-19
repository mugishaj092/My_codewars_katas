function findArray(arr1, arr2){
    let newArray=[]
    for(let i=0;i<arr2.length;i++){
        newArray.push(arr1[arr2[i]])
    }
    if(arr1.length===0){
        newArray=[]
    }
    return newArray
  }