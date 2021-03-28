function removeDuplicates(nums: number[]): number {

    let j = 1;
    for(let i=0; i < nums.length; i++){
        if(nums[i]=nums[j]){
            nums[i] = nums[j]
        }
    }


    return nums.length
}