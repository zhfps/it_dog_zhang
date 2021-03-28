function removeElement(nums: number[], val: number): number {
    let j = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] === val){
            nums[i] = nums[i+1]
        }else{
            j++
        }
    }
    return j
};