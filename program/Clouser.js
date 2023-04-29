
// const createPrintFunc = () => {
//     const myNum = 07;
//     return () => console.log("My Number is " + myNum);
// }

// const print = createPrintFunc()
// print()

// console.log(myNum);


const Person = ({ name, age, job }) => {

    var _name = name;
    var _age = age;
    var _job = job;

    return {
        getName: () => _name,
        setName: (newName) => _name = newName,
        getAge: () => _age,
    }
}

const me = Person({ name: 'rabi', age: 25, job: 'developer' })

//only setter and getter function has access to the private variables because of clouser concept

console.log(me.getName());
me.setName('Rabiul Islam')
console.log(me.getName());
console.log(me.getAge());

console.log(me._name); //undefined