function longestCommonPrefix(strs: string[]): string {
  let str = '';
  if(strs.length === 0){
    return ""
  }
  if(strs.length === 1){
    return strs[0]
  }
  let num = strs[0].length-1;
  for (const item of strs) {
    if(item.length-1 <num){
      num = item.length-1
    }
  }
  let i =0
  while(num>=i){
    let key = strs[0].charAt(i)
    let check = true
    for (const item of strs) {
      if(item.charAt(i) !== key){
        check = false
        break;
      }
    }
    if(check === false){
      break;
    }else{
      str +=key
    }
    i++
  }
  return str

}
console.log(longestCommonPrefix(["flower","flower","flower","flower"]
))

