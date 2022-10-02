
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
