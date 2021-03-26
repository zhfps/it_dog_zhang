function longestCommonPrefix(strs: string[]): string {
  let str = 0;
  let num = 0;
  for (const item of strs) {
    if(item.length <num){
      num = item.length
    }
  }

}
