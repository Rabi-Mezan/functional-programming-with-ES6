const double = x => x * 2;
const subtract = x => x - 1;
const add5 = x => x + 5;


const functionArray = [
    double,
    subtract,
    add5
]

var number = 40;

functionArray.forEach(func => number = func(number))

console.log(number);