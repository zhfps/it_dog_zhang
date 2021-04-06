function addBinary(a: string, b: string): string {
    let al = a.length-1;
    let bl = b.length-1;
    let temp = 0
    let result = ''
    while(al>0 && bl>0 && temp===1){
      let ai =Number(a.charAt(al))
      let bi =Number(b.charAt(bl))

      let nu = ai + bi +temp
      if(nu ===1){
        result = '1'+ result
        temp = 0
      }else if(nu===2){
        result = '0'+ result
        temp = 1
      }else{
        result = '1'+ result
        temp = 1
      }
    }

    return result
};

console.log(addBinary('111','101'))