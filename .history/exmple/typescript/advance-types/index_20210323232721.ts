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
 let A = 0
 for(let i=arr.length-1;i>=0;i--){{
    
   const B =lom[arr[i]]
   if(A>B){
     num = num - B
   }else{
     num = num + B
   }
   A = B
   
 }}
 return num

};
console.log(romanToInt('MCDLXXVI'))
