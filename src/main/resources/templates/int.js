// let x = 10e4
// console.log('MAX_SAFE_INTEGER',  Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) -1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX VALUE', Number.MAX_VALUE)
// console.log('MIN VALUE',  Number.MIN_VALUE)
// console.log('POSITIVE INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('NaN', Number.NaN)
// let y = 2 / "afsv"
//
// console.log(Number.isNaN(y))
// console.log(isNaN(y))
// console.log(isFinite(Infinity))
//
//
// let stringInt = '54'
// let stringFloat = '54.54'
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)
// console.log(+stringFloat)

// console.log(0.4 + 0.2)
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// BigInt
//
// console.log(20n - 6n)

// Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))
console.log(Math.pow(5, 7))
console.log(Math.max(5, 7))
console.log(Math.min(5, 7))
console.log(Math.floor(6.9))// округление в низ  4
console.log(Math.ceil(4.1))// округление вверх  5
console.log(Math.round(4.1)) //округление к ближайшему целому числу
console.log(Math.trunc(4.2423)) // к целому, буд дроби

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(10, 30));