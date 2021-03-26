function longestCommonPrefix(strs: string[]): string {
  let str = 0;
  let num = 0;
  if(strs.length === 0){
    return ""
  }
  for (const item of strs) {
    if(item.length <num){
      num = item.length
    }
  }

}
