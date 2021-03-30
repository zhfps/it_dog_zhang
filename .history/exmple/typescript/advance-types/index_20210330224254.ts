function searchInsert(nums: number[], target: number): number {
    let j = -1
    for(let i=0; i<nums.length;i++){
      if(nums[i] <= target){
          j = i
          break
      }
  }
  return j
};

console.log(searchInsert([1,2,3,4,5]),4)