function reverse(x: number): number {
  let num:number = 0;
  let y:number = x;
  let k = -1
  if(y<0){
    y = y*k
  }else{
    k= k*k
  }
  while(y/10>0){  
      num = num*10+ y%10
       y = (y-y%10)/10;
  }
  return num*k;
};
console.log(reverse(-123))
