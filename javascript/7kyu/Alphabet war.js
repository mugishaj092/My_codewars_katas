function alphabetWar(fight)
{
const leftLetter=["w","p","b","s"]
const Score=[4,3,2,1]
const rightLetter=["m","q","d","z"]

  let totalLeftScore=0;
  let totalRightScore=0;
  
  fight.split("").map((item,index)=>{
    if(leftLetter.includes(item)){
        totalLeftScore+=Score[leftLetter.indexOf(item)]
    }else if(rightLetter.includes(item)){
        totalRightScore+=Score[rightLetter.indexOf(item)]
    }
  })
  if(totalLeftScore>totalRightScore){
      return "Left side wins!"
  }else if(totalLeftScore<totalRightScore){
      return "Right side wins!"
  }else{
      return "Let's fight again!";
  }
}