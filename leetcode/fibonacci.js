
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


/**
 * 如果是動態規劃的想法，則是每次將已經算過的數字記錄下來，就可以避免上例中的重複計算。例如下方的寫法就是將計算過的數字存在陣列中。
 */

//  # Fibonacci Series using Dynamic Programming
//  def fibonacci(n):
      
//      # Taking 1st two fibonacci numbers as 0 and 1
//      f = [0, 1]
      
      
//      for i in range(2, n+1):
//          f.append(f[i-1] + f[i-2])
//      return f[n]
      
//  print(fibonacci(9))

