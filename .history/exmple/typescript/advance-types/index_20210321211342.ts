function reverse(x: number): number {
  let num:number = 0;
  let y:number = x;
  console.log(y%10 != 0 && y%10<10)
  while(y%10 != 0 && y%10<10){  
      console.log(y)   
      num = num*10+ y%10
       y = (y-y%10)/10;
  }
  return num;
};
console.log(reverse(120))
