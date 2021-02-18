// 1.暴力破解
// const nums = [2, 7, 11, 15], target = 9;
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i += 1) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// }

// 2.优化暴力破解法
const nums = [2, 7, 11, 15], target = 9;
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i += 1) {
        let index = nums.indexOf(target - nums[i]);
        if (index !== -1 && index !== i) {
            return [i, index]
        }
    }
}