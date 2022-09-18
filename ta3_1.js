function getFac(num){
    let c=1;
    if (num===1){
        c=c*num
        return c
    }else if (num===2){
        c=c*num
        return c
    }else if (num===3){
        //c=c*(num-1)
        //c=c*num
        c=c*num*(num-1)
        return c
    }else if (num===4){
       //c=c*(num-2)
       // c=c*(num-1)
      //  c=c*num
        c=c*num*(num-1)*(num-2)
        return c
    }else if (num===5){
        //c=c*(num-3)
       // c=c*(num-2)
       // c=c*(num-1)
       // c=c*num
        c=c*num*(num-1)*(num-2)*(num-3)
        return c
    }else if (num===6){
       // c=c*(num-4)
       // c=c*(num-3)
      //  c=c*(num-2)
     //   c=c*(num-1)
      //  c=c*num
        c=c*num*(num-1)*(num-2)*(num-3)*(num-4)
        return c
    }else if (num===7){
        //c=c*(num-5)
       // c=c*(num-4)
       // c=c*(num-3)
       // c=c*(num-2)
       // c=c*(num-1)
       //c=c*num
        c=c*num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)
        return c
    }else if (num===8){
       // c=c*(num-6)
        //c=c*(num-5)
       //c=c*(num-4)
       // c=c*(num-3)
       // c=c*(num-2)
      //  c=c*(num-1)
      //c=c*num
        c=c*num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)
        return c
    }else if (num===9){
       // c=c*(num-7)
       // c=c*(num-6)
       // c=c*(num-5)
       // c=c*(num-4)
       // c=c*(num-3)
       // c=c*(num-2)
       // c=c*(num-1)
       // c=c*num
        c=c*num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-7)
        return c
    }else if (num===10){
        //c=c*(num-8)
        //c=c*(num-7)
        //c=c*(num-6)
        //c=c*(num-5)
        //c=c*(num-4)
        //c=c*(num-3)
        //c=c*(num-2)
        //c=c*(num-1)
        //c=c*num
        c=c*num*(num-1)*(num-2)*(num-3)*(num-4)*(num-5)*(num-6)*(num-7)*(num-8)
        return c
    }else
      return "Not Define"
}
console.log(getFac(2))