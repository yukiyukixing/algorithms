// 1.滑动窗口法
const cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3;
var maxScore = function (cardPoints, k) {
    let n = cardPoints.length;
    windowLength = n - 3;
    let sum = 0;
    for (let i = 0; i < windowLength; i++) {
        sum += cardPoints[i]
    }
    let minSum = sum;
    for (let i = windowLength; i < n; i++) {


    }
    sum(tempArray)
};

function sum(array) {
    return array.reduce((acc, cur) => {
        return acc += cur
    }, 0)
}