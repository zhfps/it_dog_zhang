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
    
   console.log(lom[arr[i]])
    
   console.log(lom[arr[i-1]])
   i=i-2
 }}
 return 0

};
romanToInt('III')