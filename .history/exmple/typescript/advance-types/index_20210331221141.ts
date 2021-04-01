function lengthOfLastWord(s: string): number {
 let l = 0
 let ch = 0
 for(let i = s.length-1;i>=0;i--){
  if(s.charAt(i) != '' && ch<1 ){
    l++
  }else{
    if(ch<1){
      continue
    }else{
      break;
    }
  }
 }
 return l
};

console.log(lengthOfLastWord('a '))