function addBinary(a: string, b: string): string {
    let al = a.length-1;
    let bl = b.length-1;
    let temp = 0
    let result = ''
    while(al>0 || bl>0){
      let ai = 0
      if(al>0){
        al = Number(a.charAt(al))
      }
      let bi = 0
      if(bl>0){
        bl = Number(b.charAt(bl))
      }

      let nu = ai + bi +temp
      console.log(nu)
      if(nu ===1){
        result = '1'+ result
        temp = 0
      }else if(nu===2){
        result = '0'+ result
        temp = 1
      }else if(nu===0){
        result = '0'+ result
        temp = 0
      }else{
        result = '1'+ result
        temp = 1
      }
      al--
      bl--
    }

    return result
};

console.log(addBinary('111','101'))