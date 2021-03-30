function strStr(haystack: string, needle: string): number {
  if(haystack.length === 0){
      return 0
  }
  if(haystack.length < needle.length){
      return -1
  }
  let m = haystack.length
  let n = needle.length
  let i = 0
  let l = 0
  while(i<j && l<k){
        if (haystack.charAt(i) == needle.charAt(j)) { //逐个比较，相等，则继续往后比
            ++i;
            ++j;
        } else { //不相等，则指针回溯
            i = i - j + 1;
            j = 0;
        }
    }
    if (j == n) { //字串比完了，返回位置
        return i - j;
    } else {
        return -1;
    }
};