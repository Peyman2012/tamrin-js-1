function getFac(num=1){
    let c=1;
    for(let i=1;i<=num;i++){
        c=c*i;  
    }
    return c;
}
console.log('fac:',getFac(10))