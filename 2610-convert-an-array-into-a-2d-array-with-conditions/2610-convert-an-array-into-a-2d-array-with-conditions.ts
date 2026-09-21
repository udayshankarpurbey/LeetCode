function findMatrix(nums: number[]): number[][] {

    const matrixTrack = new Map();
    let matrix = [];
    for (let i = 0; i < nums.length; i++) {
        if (matrixTrack.has(nums[i])) {
            matrixTrack.set(nums[i], matrixTrack.get(nums[i]) + 1);
        } else {
            matrixTrack.set(nums[i], 0);
        }
        matrix[matrixTrack.get(nums[i])] =
            matrix[matrixTrack.get(nums[i])] ?
                [...matrix[matrixTrack.get(nums[i])], nums[i]] :
                [nums[i]];

    }
    return matrix;
};