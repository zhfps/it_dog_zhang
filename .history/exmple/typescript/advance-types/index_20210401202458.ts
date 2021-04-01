function plusOne(digits: number[]): number[] {
  let lg:number = digits.length
  let old:number = 0
  let j:number = 0
  let arr = []
  for(let i=lg-1; i>=0;i--){
      console.log(10**j++*digits[i])
      //old+=10**j++*digits[i]
  }
  old = old + 1
  console.log(old)
  while(old>9){
      const n = old%10
      if(arr.length == 0){
          arr.push(n)
      }else{
          arr.unshift(n)
      }
      old = (old-n)/10
  }
  arr.unshift(old)
return arr
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))