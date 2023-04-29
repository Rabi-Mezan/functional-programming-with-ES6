
const numbers = [2, 7, 10, 22, 70, 3, 5];

const sum = numbers.reduce((acc, x) => {    //acc is acumulator the initial velue which is given as 0 , x is the first element of the array

    console.log('acc is ' + acc);
    console.log('x is ' + x);
    return acc + x;
}, 0)

console.log(sum);

