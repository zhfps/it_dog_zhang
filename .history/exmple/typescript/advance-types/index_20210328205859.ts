function removeDuplicates(nums: number[]): number {

    let j = 0
    if(nums.length <2){
        return nums.length
    }
    for(let i=1; i < nums.length; i++){
        if(nums[i]==nums[j]){
            nums[++j] = nums[i]
        }
    }


    return j
}