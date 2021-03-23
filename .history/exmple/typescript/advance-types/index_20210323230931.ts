function romanToInt(s: string): number {
 const lom:any = {
   I:1,
   V:5,
   X:10,
   L:50,
   C:100,
   D:500,
   M:1000
 }
 let num = 0;
 let arr = s.split('')
 for(let i=arr.length-1;i>=0;){{
    
   const A =lom[arr[i]]
    let B = 0
   if(i-1>=0){
    B =lom[arr[i-1]]
   }  
   if(A>B){
     num = num+A-B
   }else{
     num = num+A+B
   }
   i=i-2
 }}
 return num

};
console.log(romanToInt('IV'))
