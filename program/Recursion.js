
//in recusion a function is called by it self

const countDown = x => {
    if (x < 0) return; //recursive function must have a stoping condition
    console.log(x);
    countDown(x - 1)

}

const countUp = (x, max) => {
    if (x > max) return;
    console.log(x);
    countUp(x + 1, max)
}

console.log(countDown(5));
console.log(countUp(0, 10));