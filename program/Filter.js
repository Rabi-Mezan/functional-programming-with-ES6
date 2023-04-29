
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const evenNumber = numbers.filter(x => x % 2 === 0)
// console.log(evenNumber);

const words = [
    'hello',
    'goodbye',
    'the',
    'Antarctica'
];

const greater5 = word => word.length > 5;

console.log(words.filter(greater5));
