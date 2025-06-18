function getFirstPython(list) {
let result 
let found=0;
  list.map((item,index)=>{
    
    if(item.language==="Python" && found==0){
      result= `${item.firstName}, ${item.country}`
      found=1;
    }
  })
  if(!found){
    result="There will be no Python developers";
  }
return result
}