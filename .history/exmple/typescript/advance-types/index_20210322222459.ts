function reverse(x: number): boolean {
  if(x < 0 || x<-2147483648 || x>2147483647){
    return false
  }else{
    let num:number = 0;
    let y:number = x;   
    while(y/10>0){  
        num = num*10+ y%10
         y = (y-y%10)/10;
    }
    if(num === x){
      return true
    }else{
      return false
    }
  }
 
};
console.log(reverse(121))
