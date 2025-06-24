function oddOrEven(array) {
    let sum=0;
   array.map((item)=>{
     sum+=item;
   })
   if(sum%2===0){
     return "even"
   }
   return "odd"
 }