function plusOne(digits: number[]): number[] {
  let lg = digits.length
  let old = 0
  let j = 0
  let arr = []
  for(let i=lg-1; i>=0;i--){
      old+=10**++j*digits[i]
  }
  old +=1
  while(old>10){
      const n = old%10
      if(arr.length == 0){
          arr.push(n)
      }else{
          arr.unshift(n)
      }
      old = (old-n)/10

  }
return arr
};

console.log(plusOne([1,2,3]))