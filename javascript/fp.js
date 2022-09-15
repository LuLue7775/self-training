/**
 * https://www.youtube.com/watch?v=zeZOPB9uxdE&t=1680s
 * https://www.youtube.com/watch?v=XvLMO2wE3OQ
 */


/**
 * pipe and compose
 * https://www.youtube.com/watch?v=kclGXphtmVg&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=12
 */

const add2 = x => x+2
const subtract1 = x => x-1
const multiplyby5 = x => x*5

const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val)
const compResult = compose(multiplyby5, subtract1, add2)(4)

const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val)
const pipeResult = pipe(add2, subtract1, multiplyby5)(5)
// console.log(pipeResult)


// palindrome problem
const split = str => str.split('')
const join = str => str.join('')
const lower = str => str.toLowerCase()
const reverse = str => str.reverse()

const fwd = pipe( split, join, lower )

                // here this is a nested pipe
const rev = pipe( fwd, split, reverse, join )

const testStr = 'abcdcba'
// console.log(fwd(testStr) === rev(testStr))



/**
 * examples for modifying obj 
 * Basic idea: Adding clone / copy functions to compose / pipe first
 */
    const scoreObj = { home: 0, away: 0 }
    const shallowClone = obj => Array.isArray(obj) ? [...obj] : {...obj}

    // Example 1: Clone function before impure function 
    const increamentHomeA = obj => {
        obj.home +=1
        return obj
    }

    const homeScoreA = pipe(
        shallowClone,
        increamentHomeA
    )
    // console.log(homeScoreA(scoreObj))
    // console.log(scoreObj)
    // console.log(homeScoreA(scoreObj) === scoreObj)


// Example 2: Curry the function for a partial that is unary 
    let increamentHomeB = cloneFn => obj => {
        const newObj = cloneFn(obj)
        newObj.home += 1
        return newObj
    }
    //create the partial by applying the first arg in advance
    increamentHomeB = increamentHomeB(shallowClone)

    const homeScoreB = pipe(
        increamentHomeB
    )

// Example 3: Insert the clone function as a dependency 
    let increamentHomeC = (obj, cloneFn) => {
        const newObj = cloneFn(obj)
        newObj.home += 1
        return newObj
    }

    const homeScoreC = pipe(
        x => increamentHomeC(x, shallowClone)
    )
