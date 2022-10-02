
const addCustomer = fn => (...args) => {
    console.log('saving customer info')
    return fn(...args)
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`)
    return fn(...args)
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`)
}

// completeOrder = processOrder(completeOrder)
// console.log(completeOrder)
// completeOrder = addCustomer(completeOrder)
// completeOrder("1000")


// 主要想法就是：回傳一個func，並未arg保留空間給未來用
// 這個實作只能接收固定數量arg
const currySimple = fn => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            console.log(args)
            return curried.bind(null, ...args)
        }
        return fn(...args)
    }
}

const total = (x, y, z) => x + y + z

const curriedTotal = currySimple(total)
// console.log(curriedTotal(10)(20)(30))


// 但這個一次只接受一個arg
function curry2(a) {
    return function(b) {
        return b ? curry2(a+b) : a 
    }
}

// console.log(curry2(1)(2)(3)(4)()) 


/**
 * Variadic Currying 
 * the actualInnerFn receiving dynamic numbers of args
 */
const _sum3 = (x, y, z) => x + y + z;

const curryVariadic = fn => {
    const innerFn = (N, args) => {
        return (...x) => {
            console.log(...args, ...x)
            if (N <= x.length) return fn(...args, ...x) // wrap all flattened args

            return innerFn(N - x.length, [...args, ...x]); // keep on flattening args
        }
    }

    return innerFn(fn.length, []);
}

const sum3 = curryVariadic(_sum3);

// sum3(2, 3)(4)
// sum3(2)(3, 4)

/**
 * Infinite Currying
 * https://codeburst.io/perpetual-currying-in-javascript-5ae1c749adc5
 */
// 但這個一次只接受一個arg
const curryInfinite = fn => {
    const next = (...args) => {
        return (x) => {
          if (!x) {
            console.log(args)
            return args.reduce((acc, a) => {
              return fn.call(fn, acc, a)
            }, 0);
          }
          return next(...args, x);
        };
      };
      return next();
}
const iSum = curryInfinite((x, y) => x + y);
// console.log(iSum(1)(3)(4)(2)());

// IMPORTANT
const variadicInfiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
      args.reduce((acc, a) => {
        return fn.call(fn, acc, a);
      }, seedValue);

    const next = (...args) => {
      return (...x) => {
        if (!x.length) return reduceValue(args, seed);
        return next(...args, reduceValue(x, seed));
      };
    };

    return next();
  };
  
  const iSum2 = variadicInfiniteCurry((x, y) => x + y, 0);
  const iMul = variadicInfiniteCurry((x, y) => x * y, 1);
  console.log(iSum2(1)(3, 4)(5, 6)(7, 8, 9)()); // 43
//   console.log(iMul(1)(3, 4)(5, 6)()); // 360


// function helloSat(){
//     let args = [...arguments];
 
//     let addFn = function(){
//          args.push(...arguments);
//          return addFn;
//     }
 
//     addFn.toString= function(){
//          return args.reduce((a,b)=>{
//  	return a + b;
//          });
//     }
    
//     return addFn;
// }
 
// helloSat(1,2,3)(4) // f 10
// helloSat(1,2,3)(4).toString // 10


/**
 * This integrates sum function inside curry using .reduce()
 */

function curriedSum(...args) {
    function b(...arg) {
        if (arg.length > 0) {
            return curriedSum(...[...arg, ...args]);
        }

        return [...args, ...arg].reduce((prev,next)=>prev + next);
    }

    b.toString = function() {
        return [...args].reduce((prev,next)=>prev + next);
    }

    return b;
}

// console.log(curriedSum(1)(2)(3, 3)());
// console.log(+curriedSum(1)(2)(3)); // 6
// console.log(+curriedSum(1)(2, 3)(4)(5, 6, 7)); // 28
// console.log(+curriedSum(2, 3, 4, 5)(1)());    // 15


/**
 * // Object.assign way
 * https://medium.com/@seenarowhani95/infinite-currying-in-javascript-38400827e581
 * 
 * Object.assign here allows us to return a new function instance with bound arguments.
 * When you bind arguments to a function, they are embedded into the function call essentially.
 *      const sum = (a, b, c) => a + b + c
 *      const boundSum = sum.bind(null, 1, 2)
 * Object.assign here will take all the properties of the second object, and place them into the first object.
 */

// function curriedSum(...args) {
//     return Object.assign( curriedSum.bind(null, ...args), { valueOf: () => args.reduce((a, c) => a + c, 0) } )
//   }
// const partiallyEvaluated = curriedSum(1, 2, 3)(4)(5, 6)(4)
// console.log(+partiallyEvaluated) // meaning: Number(partiallyEvaluated)



/**=======================================================================
 *   Real world examples
 =========================================================================*/

/**
 * Decorator
 * decorator（裝飾器）即是柯里化的應用，如下所示，函式 sayHello 先傳入字串 name，再傳入元件 cmp，即可為元件新增屬性 intro
 * 可用新式語法 @ 來使用 decorator。
 */











/**
 * // Generic curried functions
    const filter = predicate => array => array.filter(predicate);
    const filterBy = propertyName => propertyValue =>
        filter(item => item[propertyName] === propertyValue);

    // Usage:
    const filterByName = filterBy("name");
    const filterByNameJohn = filterByName("John");

    console.log(filterByNameJohn(list));
 */

const list = [
{
    id: 1,
    name: 'Steve',
    email: 'steve@example.com',
},
{
    id: 2,
    name: 'John',
    email: 'john@example.com',
},
{
    id: 3,
    name: 'Pamela',
    email: 'pam@example.com',
},
{
    id: 4,
    name: 'Liz',
    email: 'liz@example.com',
},
];

// uncurried
const filterByName = (list, person) => {
    return list.filter( item => item.name !== person )
}

// curried
const filterByNamePartial = person => item => item.name !== person
const filterByNameCurried = ( list, person ) => list.filter(filterByNamePartial(person))
console.log(filterByNameCurried(list, 'Steve'))



/**
 * compose function
 */