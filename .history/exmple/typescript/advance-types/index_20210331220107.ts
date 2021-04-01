function lengthOfLastWord(s: string): number {
 const arr = s.split(' ')
 return arr[arr.length-1].length
};

console.log(lengthOfLastWord('a '))