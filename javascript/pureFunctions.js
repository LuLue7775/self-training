
// primitive undefined, bool, number, string, bigInt, symbol  => they pass values
// structral: (object) array, map, set, weakmapm date function  => they pass ref

// primitives are immutable (let...)
// const function (function expression) still immute structral data inside it 

/**
 * Shallow Copy & Deep Copy
 */


const xArray = [1, 2, 3]
const yArray = xArray
const zArray = [...yArray, 10]
console.log(xArray === yArray)
console.log(zArray === yArray)

const tArray = Object.assign([], zArray)
console.log(tArray === zArray)

tArray.push(11)
console.log(tArray, zArray)
tArray.push([0, 0, 0])
console.log(tArray)

const vArray = [...tArray]
console.log(vArray)


// nested structural data types still share a reference 

// Array.from() and slice() create shallow copies too.

// Object.freeze() still mutates!

const scoreObj = {
    "first": 44,
    "second": 12,
    "third": { "a": 1, "b": 2}
}

Object.freeze(scoreObj) 
scoreObj.third.a = 9
// console.log(scoreObj)

// So DEEP COPY is the solution 
// easy fix but it does not work with Dates, functions, undefined, Inifinity, RegExps, Maps, Sets, FileLists, ImageDates... and other complex types

const newObj = JSON.parse(JSON.stringify(scoreObj))

// ULTIMATE SOLUTION
const deepClone = obj => {
    if (typeof obj !== 'object' || obj === null) return obj

    const newObject = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        newObject[key] = deepClone( obj[key] )
    }
    return newObject
}

const scoreArray = [ 80, 30, 70 ]

const pureAddToScoreHistory = (arr, score, cloneFunc) => {
    const newArray = cloneFunc(arr)
    newArray.push(score)
    return newArray
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 90, deepClone)
