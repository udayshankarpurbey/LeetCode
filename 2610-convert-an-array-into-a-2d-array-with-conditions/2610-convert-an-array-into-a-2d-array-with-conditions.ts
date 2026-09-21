function findMatrix(nums: number[]): number[][] {

    const matrixTrack = new Map();
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (matrixTrack.has(nums[i])) {
            matrixTrack.set(nums[i], matrixTrack.get(nums[i]) + 1);
        } else {
            matrixTrack.set(nums[i], 0);
        }

        if (obj[matrixTrack.get(nums[i])]) {
            obj[matrixTrack.get(nums[i])].push(nums[i]);
        } else {
            obj[matrixTrack.get(nums[i])] = [nums[i]];
        }

    }
    return Object.values(obj);
};