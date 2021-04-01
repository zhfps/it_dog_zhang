function plusOne(digits: number[]): number[] {
  let lg:number = digits.length
  let old:number = 0
  let j:number = 0
  let arr = []
  for(let i=lg-1; i>=0;i--){
      old+=10**j++*digits[i]
  }
  old = old + 1
  console.log(old)
  while(old>10){
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

console.log(plusOne([1,2,3]))