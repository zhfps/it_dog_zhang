function isValid(s: string): boolean {
   const arr = s.split('')
   if(arr.length%2!==0){
     return false
   }else{
     let statck = []
     for (const item of arr) {
       if(statck.length == 0){
         statck.push()
       }
     }
   }
};