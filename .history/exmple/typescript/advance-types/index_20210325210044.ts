function isValid(s: string): boolean {
   const arr = s.split('')
   if(arr.length%2!==0){
     return false
   }else{
     const point:Object<string,string> = {
      '(': ')',
      '[': ']',
      '{': '}'
     }
     const statck: = []
     for (const item of arr) {
       if(statck.length == 0){
         statck.push(item)
         continue
       }else{
         const top = point[statck.pop()] 
         if(top != item){
           statck.push(top)
           statck.push(item)
         }else{
          console.log(statck)
           continue
         }
       }
     }
     if(statck.length === 0){
       return true
     }else{
       return false
     }
   }
};

console.log( isValid('()[]{}'))