// 1. Сумма всех элементов
function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 2. Разница между максимальным и минимальным
function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    
    return max - min;
}

// 3. Разница сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;
    
    let sumEven = 0;
    let sumOdd = 0;
    
    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    
    return sumEven - sumOdd;
}

// 4. Среднее арифметическое чётных элементов
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
    
    return Number((sumEven / countEven).toFixed(2)); // округляем до 2 знаков
}

console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38