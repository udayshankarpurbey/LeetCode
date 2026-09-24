function smallestIndex(nums: number[]): number {

    for(let i = 0 ; i<nums.length;i++) {
        if(i === nums[i].toString().split('').reduce((acc, cur) => Number(acc) + Number(cur) ,0)) return i;
    }

    return -1;    
};
