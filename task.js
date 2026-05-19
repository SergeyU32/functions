function getArrayParams(...arr) {
    // Если массив пустой
    if (arr.length === 0) {
        return { min: Infinity, max: -Infinity, avg: null };
    }

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
        sum += arr[i];
    }

    const avg = Number((sum / arr.length).toFixed(2));

    return { min, max, avg };
}

console.log(getArrayParams(-99, 99, 10));     
// { min: -99, max: 99, avg: 3.33 }

console.log(getArrayParams(1, 2, 3, -100, 10)); 
// { min: -100, max: 10, avg: -16.80 }

console.log(getArrayParams(5));               
// { min: 5, max: 5, avg: 5 }