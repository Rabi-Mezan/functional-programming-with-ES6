const mixedNum = [2, 7, 10, 22, 70, 3, 5]

const ascending = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

const descending = (a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}

console.log(mixedNum.slice().sort(ascending));
console.log(mixedNum.slice().sort(descending));
