function countAndSay(n: number): string {
    if(n == 1){
      return '1'
    }
    let str = ''
    for(let i=1;i<n;i++){
      str = countAndSay(i)
      for(let j = str.length; j>=0;j--){
        
      }
    }
};