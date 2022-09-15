
/**
 * Concept
 * In each for iteration we create an IIFE function that receives its own copy of i variable’s value and assigns that value to its local x variable. That’s why every time when we execute any of that functions we get the value that was assigned to a local x variable
 */
var result = []

for ( var i = 0; i<5; i++ ) {
    result[i] = (function inner(x) {
        return function() { return x }
    })(i)
}

// console.log(result[2]())

/**
 * Concept
 * No matter where the function was executed it still remembers and has access to the lexical scope in which it was declared. here slow function has access to inner scope (run scope) and outer scope (global scope).
 */
var a1 = 10

function run() {
    var a1 = 20
    function slow() {
        console.log(a1)
    }
    exec(slow)
}

function exec(func) {
    var a1 = 30
    func()
}

// run()

/**
 *   curry explained                                                                                                                                                                                                                                           
 */

const addCustomer = fn => (...arg) => {
    // console.log('saving customer info')
    return fn(...arg)
}

const processOrder = fn => (...arg) => {
    // console.log(`processing order #${arg[0]}`)
    return fn(...arg)
}

let completeOrder = (...arg) => {
    // console.log(` order #${[...arg].toString()} completed.`)
}

completeOrder = (processOrder(completeOrder))
// console.log(completeOrder)
completeOrder = (addCustomer(completeOrder))
completeOrder("100")

// function addCustomer(...arg) {
//     return function processOrder(...arg) {
//         return function completeOrder(...arg) {
//             // ...end
//         }
//     }
// }

/**
 * Partial
 */
const curry = fn => {
    // console.log(fn.length)
    return curried = (...args) => {
        console.log(args.length)
        if (fn.length !== args.length) {
            return curried.bind(null, ...args) //bind creates new func, 一層層把param合在一起
        }
        return fn(...args)
    }
}

const total = (x,y,z) => x+y+z

const curriedTotal = curry(total)
// curriedTotal(10)(20)(30)


/**
 * Decorators (HOF)
 */

// the func needs to be decor has to be "let" cuz it's modified
let rectangleArea = (length, width) => {
    return length*width
}

const countParams = (fn) => {
    return (...params) => {
        if (params.length !== fn.length) {
            throw new Error(`Incorrect num of param for ${fn.name}`)
        }
        return fn(...params)
    }
} 

const requireIntegers = (fn) => {
    return (...params) => {
        params.forEach(param => {
            if(!Number.isInteger(param)) {
                throw new TypeError(`Params for ${fn.name} must be int`) 
            }
        })
        return fn(...params)
    }
}

rectangleArea = countParams(rectangleArea)
rectangleArea = requireIntegers(rectangleArea)
// console.log(rectangleArea(20, "hey"))

/**
 *  ANOTHER USECASE for Decorators
 *  Very useful when writting test.
 */
let requestData = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

const dataResTime = (fn) => {
    return async (url) => {
        console.time('fn')
        const data = await fn(url)
        console.timeEnd('fn')
        return data
    }
}

const myTestFunc = async () => {
    requestData = dataResTime(requestData)
    const data = await requestData('https://jsonplaceholder.typicode.com/posts')
    // console.log(data)
}
// myTestFunc()

/**
 * IMMUTABLE, 
 * we thought const makes data immutable, but const immutablity doen't work for structural data type(object, function)
 * So the solution to it is to MAKE A COPY. 
 * 
 * BUT, shallow & deep copy make a difference. 
 * If structure data is nested, shallow copy immutable method WON'T WORK.
 * 
 * Note: Spread operator, Object.assign(), Array.from() and slice() create shallow copies. meaning the copied object is still mutable.
 *          and Object.freeze() is a shallow freeze.
 * 
 * JSON.parse(JSON.stringify(someObj)) doesn't work with Dates. functions, RegExp, Maps, Sets, undefined, Infinity, Blobs...and other complex data type. 
 */

const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null ) return obj

    const newObject = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        const val = obj[key]
        // console.log('val:', val)
        newObject[key] = deepClone(val)
    }
    return newObject
}
const original = [[['a00', 'a01'], 'a1'], ['b0', 'b1', ['b20', 'b21']], 'c0' ]
const cloned = deepClone(original )

const pureAddToScoreHistory = ( arr, score, cloneFunc ) => {
    const newArray = cloneFunc(arr)
    newArray.push(score)
    return newArray
}

const pureScoreHistory = pureAddToScoreHistory(original, 18, deepClone)
console.log(pureScoreHistory)
console.log(original)

/**
 *  pure function solution: make a copy of the original data
 */

let x = 1
let myArr = [1, 2 ]

const pureEx1 = (num) => num +=1

const pureEx2 = (array, data) => [...array, data]

// NOTE: This doesn't work for nested data, will need deep copy.

// RECOMMENDED SOLUTION: use typical HOF to write pure func (e.g. filter() )

