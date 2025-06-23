function one(arr, fun){
    let found=0;
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i])){
            found++;
        }
    }
    if(found===1){
        return true
    }
    return false
}