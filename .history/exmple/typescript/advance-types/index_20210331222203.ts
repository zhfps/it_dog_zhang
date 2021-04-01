function lengthOfLastWord(s: string): number {
 let l = 0
 let ch = 0
 for(let i = s.length-1;i>=0;i--){
  if(s.charAt(i) != ' ' && ch !=0){
    l++
    ch++
  }else{
    if(s.charAt(i) ===' ' && l==0){
     ch = 0
    }else{
      break;
    }
  }
 }
 return l
};

console.log(lengthOfLastWord('a b  '))