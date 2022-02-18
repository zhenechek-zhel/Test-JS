
//Function Declaration
// function greet(name) {
//     console.log("Hello - ", name)
// }


//Function expression
const greet2 = function greet2 (name) {
    console.log('Hello2 - ', name)
}

greet('Zhenya')
greet2('Evgeniy')


//console.log(typeof greet2)

//console.dir(greet)

//Anonim function

// let counter = 0
// const interval = setInterval(function () {
//
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeout
//
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// Стрелочные функции
function greet(name) {
    console.log("Hello - ", name)
}

const arrow = (name, age) => {
    console.log("Hello - ", name, age)
}

const arrow2 = name => console.log("Hello - ", name)

//arrow('Max', 23)
//arrow2('Liza')


const pow2 = num => num ** 2

//console.log(pow2(2))


// Параметры по умолчанию
const sum = (a = 40, b = a * 2) => console.log(a + b)
sum()

function sumAll(...all) {
    let result =0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6)
console.log(res)

// Замыкание
function creatMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = creatMember('Evgeniy')
console.log(logWithLastName('Zheleznov'))
console.log(logWithLastName('Ivanov'))