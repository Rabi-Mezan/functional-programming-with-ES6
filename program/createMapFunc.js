const map = (arr, func) => {
    const newArr = []

    for (let i = 1; i <= arr.length; i++) {
        newArr.push(func(i))
    }
    return newArr;
}

const arr = [1, 2, 3, 4, 5]
const func = x => x * 2

console.log(map(arr, func));