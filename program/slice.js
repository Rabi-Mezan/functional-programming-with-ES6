const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(numbers.slice(3, 9));

// some array method like reverse/push/pop mutate the array . we can prevent the mutation by using those method that does not mutatle original array 

console.log(numbers.slice().reverse()); //will not mutate the original array
console.log(numbers);
