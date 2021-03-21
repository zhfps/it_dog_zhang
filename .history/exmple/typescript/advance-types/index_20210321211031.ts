function reverse(x: number): number {
  let num:number = 0;
  let y:number = x;
  while(y%10 != 0 && y%10>9){  
      console.log(y)   
      num = num*10+ y%10
       y = (y-y%10)/10;
  }
  return num;
};
console.log(reverse(120))
