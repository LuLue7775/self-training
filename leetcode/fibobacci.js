
/**
 * Time: O(n)，Space: O(1)
 */
var fib = function(n) {
    
    if (n===0) return 0
    if (n===1) return 1

    const lastTwo = [1, 1]
    let pointer = 3
    while (pointer <= n) {
        const nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib

        pointer++
    }   
    return lastTwo[1]

}


console.log(fib(4))