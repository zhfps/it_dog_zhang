function searchInsert(nums: number[], target: number): number {
    let j = -1
    let i=0
    for(; i<nums.length;i++){
      if(nums[i] >= target){
          j = i
          break
      }
  }
  return j>-1?j:i
};

console.log(searchInsert([1,2,3,4,5],6))