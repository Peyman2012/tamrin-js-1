function getNumber(a){
  if(a>=0 && a<=23){
    if(a%15==0)
        return "Not Prime"           
    else if(a===0 || a===1)
        return "Not Prime" 
    else if(a%20===0)
        return "Not Prime" 
    else if(a%14===0)
        return "Not Prime"
    else if(a%22===0)
        return "Not Prime" 
    else if(a%21===0)
        return "Not Prime" 
    else if(a%10===0)
        return "Not Prime" 
    else if(a%4===0 || a%9===0)
        return "Not Prime"  
    else if(a===2 || a===3)
        return "Prime"    
    else if(a%5===0)
        return "Prime"  
    else if(a%7===0)
        return "Prime"  
    else if(a%11===0)
        return "Prime"  
    else if(a%13===0)
        return "Prime"  
    else if(a%17===0)
        return "Prime"  
    else if(a%19===0)
        return "Prime"  
    else if(a%23===0)
        return "Prime"    
    else 
       return "Not Prime"
  }else if(a>23)
    return  "Not Define"   

}
console.log(getNumber(11))

