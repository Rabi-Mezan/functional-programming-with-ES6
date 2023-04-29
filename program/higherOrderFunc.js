
const divide = (x, y) => x / y;

const secondArgIsnotZero = func => (...arg) => {    //secondArgIsnotZero is a higher order function which takes divide function as a args

    if (arg[1] === 0) {
        console.log('Error !! Divide by zero');
        return null;
    }

    return func(...arg)
}

const safeDivide = secondArgIsnotZero(divide)
console.log(safeDivide(7, 0));
