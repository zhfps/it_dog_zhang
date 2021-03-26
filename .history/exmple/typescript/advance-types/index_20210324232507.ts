function longestCommonPrefix(strs: string[]): string {
  let str = '';
  if(strs.length === 0){
    return ""
  }
  if(strs.length === 1){
    return strs[0]
  }
  let num = strs[0].length;
  for (const item in strs) {
    if(item.length <num){
      num = item.length
    }
  }
  let i =0
  while(num>=i){
    let key = strs[i].charAt()
    for (const item in strs) {
      
    }
    i++
  }

}
