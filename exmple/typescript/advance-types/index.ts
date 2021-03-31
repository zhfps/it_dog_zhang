function lengthOfLastWord(s: string): number {
 let l = 0
 for(let i = s.length-1;i>=0;i--){
  if(s.charAt(i) == ' ' && l ==0){
    continue
  }else{
    if(s.charAt(i) ===' ' && l>0){
     break
    }else{
     l++
    }
  }
 }
 return l
};

console.log(lengthOfLastWord('a b  '))