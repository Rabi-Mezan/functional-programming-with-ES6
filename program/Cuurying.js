//taking differernt arguments at different level is known as partial application or currying


const add = (x, y, z) => x + y + z; //talking all the three arguments at a time;


//takling 3 arguments but not at a time , it can be also posssible to take 2 at a time and one at another level or time

const partialApp = x =>
    y =>
        z => x + y + z;
const sum = partialApp(5)(6)(7);
console.log(sum);
console.log(add(5, 6, 7));