const cars = ['Mazda', 'Ford', 'BMW', 'Mers']

// const people = [
//     {name: 'Vlad', salary: 2200},
//     {name: 'Max', salary: 4500},
//     {name: 'Evgeniy', salary: 1000}
// ]

const fib = [1, 1, 2, 3, 5, 8, 13]

// cars.push('Porsche')
// cars.unshift('Volga')
//
// const fisItem = cars.shift()
// const lasItem = cars.pop()
// console.log(fisItem)
// console.log(lasItem)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('BMW')
// cars[index] = 'LADA'
// console.log(cars)


// let findedPerson
//
// for (let person of people) {
//     console.log(person)
//     if (person.salary === 987654) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)
//
// const index = people.findIndex(function (person) {
//     return person.salary === 987654
// })
//
// const findPerson = people.find(function (person) {
//     return person.salary === 1240
// })
//
// const person2 = people.find(person =>  person.salary === 987654)
//
//
// console.log(people[index])
// console.log(findPerson)
// console.log(person2)

// console.log(cars.includes('Mazda'));

const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars)



const pow2 = num => num ** 2
// const sqrt = a => Math.sqrt(a)
//
// const square = fib.map(pow2).map(sqrt)
// console.log(square)
// console.log(square)
const square = fib.map(pow2)
const array = square.filter(n => {
    return n > 20
})
console.log(square)
console.log(array)



//Task
// const text = "Hello we are learning JS"
// const reversText = text.split("").reverse().join("")
// console.log(reversText)


const people = [
    {name: 'Vlad', salary: 2200},
    {name: 'Max', salary: 4500},
    {name: 'Evgeniy', salary: 1000}
]
const sumAll = people
    .filter(person => person.salary > 1000)
    .reduce( (acc, person) => {
        acc += person.salary
    return acc
}, 0)

console.log(sumAll)