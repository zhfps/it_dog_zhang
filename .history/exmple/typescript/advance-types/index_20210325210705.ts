function isValid(s: string): boolean {
   const arr = s.split('')
   if(arr.length%2!==0){
     return false
   }else{
     const point:{[key:string]:string} = {
      '(': ')',
      '[': ']',
      '{': '}',
      ')' : '(',
      ']' : '[',
      '}' : '{'
     }
     const statck:any = []
     for (const item of arr) {
       if(statck.length == 0){
         statck.push(item)
         continue
       }else{
         const top = point[statck.pop()] 
         console.log(top,item)
         if(top != item){
           statck.push(statck.pop())
           statck.push(item)
         }else{
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

console.log( isValid('{[]}'))