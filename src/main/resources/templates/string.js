function  logPerson(s, name, age) {
    if (age < 0) {
        age = 'Not born now!'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

let name = 'Evgeniy'
let name2 = 'Max'
let age = 23
let age2 = -26

const output = logPerson`Name: ${name}, Age: ${age}!`
const output2 = logPerson`Name: ${name2}, Age: ${age2}`


console.log(output);
console.log(output2);