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
          if (haystack.charAt(i) == needle.charAt(l)) { 
              ++i;
              ++l;
          } else {
              i = i - l + 1;
              l = 0;
          }
      }
      if (l == k) { 
          return j - i;
      } else {
          return -1;
      }
};
console.log(strStr('hecllo','ll'))