
// function are also object in JS means it has property like name, lenght, toString

const add = (x, y, z) => x + y + z;
console.log(add.name);    //return the name of the function
console.log(add.length);  // return the agr length of the function
console.log(add.toString());  // return the string representation of the function 

console.log(add.call(null, 1, 2, 3));  // just call the function like what add() does.
console.log(add.apply(null, [1, 2, 3]));  // almost same as call method but takes a array of values in args instead of direct values 

const add1 = add.bind(null, 1)  // bind is like partial application . it fixes arguments  like here in add1 we fixes the first argument to 1 and bind it with add function and later we call add1 with other 2 arguments 
console.log(add1(2, 3));