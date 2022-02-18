const person = {
    name: 'Evgeniy',
    age: 23,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'complex value',
    // ['key_' + (1 + 3)]: 'Computed key', // key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log('this: ', this)
        console.info('Info about person: ', this.name)
    }
}

// console.log(person.name)
// let ageKey = 'age'
// console.log(person[ageKey])
// console.log(person["complex key"])
// console.log(person)
// person.greet()
//
// person.age++
// person.languages.push('by')
// delete person['key_4']
// console.log(person)
// console.log(person['key_4']);


// const name = person.name
// const age = person.age
// const lang = person.languages

// const {name, age : personAge = 10, languages} = person
//
// console.log(name, personAge, languages)
//console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key: ',key)
//         console.log('value: ', person[key])
//     }
// }


// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log('value: ', person[key])
// })


//CONTEXT
//person.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        console.log( logger.keys(this), Object.values(this))
    },
    keysAndValues2() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----start----')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('-------------------')
            }
        })
        if (bottom) {
            console.log('-----End------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
//logger.keys.call(person)
//logger.keysAndValues.call(person)
//logger.keysAndValues2.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])