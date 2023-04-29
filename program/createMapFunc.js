
// using reduce method
const map = (arr, func) => arr.reduce((acc, x) => [
    ...acc,
    func(x)
], [])


// using for loop
const map1 = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const result = func(arr[i])
        newArr.push(result)
    }
    return newArr;
}

console.log(map([1, 2, 3, 4, 5], x => x * 2));
console.log(map([5, 6, 7, 8, 9, 10], x => -x));
console.log(map1(['a', 'b', 'c', 'd'], x => x.toUpperCase()));