function lengthOfLastWord(s: string): number {
 const arr = s.split(' ')
 if(arr[arr.length-1]!=''){
  return arr[arr.length-1].length
 }else{
  if(arr.length-2>-1){
    return  arr[arr.length-2].length
  }else{
    return 0
  }
 }

};

console.log(lengthOfLastWord('a '))