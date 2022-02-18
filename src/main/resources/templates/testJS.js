// const fistName = 'Evgeniy'
// //const age = 23
// const isProgrammer = true
//
// const _private = 'private'
//
// console.log(_private)


//console.log('Name of person: ' + fistName + ', age: ' + age)
//console.log(age.toString())


//alert('Name of person: ' + fistName + ', age: ' + age)


// const lastName = prompt('Enter last name')
// alert(fistName + ' ' + lastName)


// let currentYear = 2022
// const birthYear = 1998
//
// //const age = currentYear + birthYear
//
// const a = 9
// const b = 5
// let c = 32
//
// c += a
//
// console.log(a + b)
// console.log(a - b)
//
// console.log(a * b)
//
// console.log(a / b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(--currentYear)
// console.log(c)

// const isProgrammer = true
// const name = 'Evgeniy'
// const age = 23
// let x
// null
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// const fullAage = 23
// const birthYear = 1998
// const currentYear = 2022
// const isFullAge = currentYear - birthYear >= fullAage
// console.log(isFullAge)

//const status = false

// if (status === 'ready') {
//     console.log('Is ready to use')
// } else if (status === 'pending') {
//     console.log('In pending')
// } else {
//     console.log('Bool shit')
// }

//status ? console.log('Ready!') : console.log('Not ready!')

// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2)

// function calc(year) {
//     return 2022 - year
// }


// function logInfo(name, year) {
//     const age = calc(year)
//
//     if (age > 0) {
//         console.log('Man name ' + name + ', age ' + age)
//     } else {
//         console.log("Is a future")
//     }
// }
//
// logInfo('Evgeniy', 2023)




// const cars1 = new Array('Mazda', 'Safdg')
//
//
// cars1[0] = 'Porsche'
// cars1[cars.length] = 'TRfnmsjkfvn'
// console.log(cars1)

const cars = ['Mazda', 'Mers', 'Ford']

// for (let i = 0; i <= cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }


const person = {
    fistName: 'Evgeniy',
    lastName: 'Zheleznov',
    age: 23,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function () {
        console.log('greet for all')
    }
}

console.log(person.fistName)
console.log(person['lastName'])
const key = 'age'
console.log(person[key])
person.isProgrammer = true
person.fistName = 'Liza'
console.log(person)
person.greet()