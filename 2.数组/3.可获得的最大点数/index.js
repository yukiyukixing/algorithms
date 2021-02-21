// 1.滑动窗口法
const cardPoints = [2, 2, 2], k = 2;
var maxScore = function (cardPoints, k) {
    const n = cardPoints.length;
    // 创建窗口长度
    const windowLength = n - k;
    let sum = 0;
    for (let i = 0; i < windowLength; i++) {
        sum += cardPoints[i]
    }
    let minSum = sum;
    for (let i = windowLength; i < n; ++i) {
        sum += cardPoints[i] - cardPoints[i - windowLength];
        minSum = Math.min(minSum, sum);
    }
    return sumArray(cardPoints) - minSum
};
console.log(maxScore(cardPoints, k));

// 求和的方法
function sumArray(array) {
    return array.reduce((acc, cur) => {
        return acc += cur
    }, 0)
}
