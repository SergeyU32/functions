// === Насадки (из предыдущего задания) ===
function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of arr) {
        if (num % 2 === 0) sumEven += num;
        else sumOdd += num;
    }
    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    let sumEven = 0;
    let countEven = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }
    if (countEven === 0) return 0;
    return Number((sumEven / countEven).toFixed(2));
}

// === Основная функция мясорубки ===
function makeWork(arrOfArr, func) {
    if (!arrOfArr || arrOfArr.length === 0) return 0;

    let maxWorkerResult = func(...arrOfArr[0]);

    for (let i = 1; i < arrOfArr.length; i++) {
        const result = func(...arrOfArr[i]);
        if (result > maxWorkerResult) {
            maxWorkerResult = result;
        }
    }

    return maxWorkerResult;
}

const arr = [
    [10, 10, 11, 20, 10],
    [67, 10, 2, 39, 88],
    [72, 75, 51, 87, 43],
    [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));        // 328
console.log(makeWork(arr, differenceMaxMinWorker));   // 86
console.log(makeWork(arr, differenceEvenOddWorker));  // 92
console.log(makeWork(arr, averageEvenElementsWorker));// 72