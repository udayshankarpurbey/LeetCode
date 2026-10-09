function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const numberWithPosition = new Map();

    for(let i = 0 ; i<nums.length; i++) {
        if(numberWithPosition.has(nums[i])) {
            
            if (i - numberWithPosition.get(nums[i]) <= k) {
                return true;
            }
        }
        
        numberWithPosition.set(nums[i] , [i]);
    }

    return false;
};
