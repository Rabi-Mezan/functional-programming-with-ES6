const electionVotes =
    ['Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley', 'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Karen', 'Harry', 'Michael', 'Karen', 'Dane', 'Donna', 'Ashley', 'Rick', 'Albert', 'Albert', 'Harry', 'Dane', 'Rick', 'Donna', 'Mortimer']

const tallyVotes = votes => {
    return votes.reduce((acc, name) => ({
        ...acc,
        [name]: acc[name] ? acc[name] + 1 : 1  //checking the name already exist a value or not then setting the initial value 1 or increasing the previous value by 1
    }), {})
}
console.log(tallyVotes(electionVotes));
// console.log(votes);