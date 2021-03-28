function removeDuplicates(nums: number[]): number {

    let j = 0;
    for(let i=1; i < nums.length; i++){
        if(nums[i]==nums[j]){
            nums[++j] = nums[i]
        }
    }


    return nums.length
}