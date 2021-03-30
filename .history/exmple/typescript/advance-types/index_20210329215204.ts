function strStr(haystack: string, needle: string): number {
  if(haystack.length === 0){
      return 0
  }
  if(haystack.length < needle.length){
      return -1
  }
  let j = haystack.length
  let k = needle.length
  let i = 0
  let l = 0
  while(i<j && l<k){
        if (haystack.charAt(i) == needle.charAt(j)) { //逐个比较，相等，则继续往后比
            ++i;
            ++l;
        } else { //不相等，则指针回溯
            i = i - l + 1;
            j = 0;
        }
    }
    if (j == k) { //字串比完了，返回位置
        return i - j;
    } else {
        return -1;
    }
};