let nums = [2,5,5,11]
let target = 10

/**
 * Brutal force
 * 時間複雜度：Ｏ(n^2) 空間複雜度：Ｏ(1)
 */
var twoSum = function(nums, target) {
    // let hashmap = {}

    for(let i=0; i < nums.length; i++) {
        for(let j=1; j < nums.length; j++) {
            if ( i === j ) continue 
            if (nums[i] + nums[j] === target) return [i, j] 
        }
    }
   };

/**
 * One-pass Hash Table
 * 時間複雜度為O(n) Space-> Ｏ(n)
 */
var twoSum2 = function(nums, target) {
    const comp = {}
    
    for(let i=0; i < nums.length; i++) {
        if(comp[nums[i]] >= 0) return [ comp[nums[i]] , i ]  
        comp[target-nums[i]] = i  // 先算好差，那個差就是正在尋找的數字，放進comp hash
        console.log(comp)
    }
}

console.log(twoSum2(nums, target))

/**
 * Two-pass Hash Table
 */


/**
 * Sort array first!!!
 * Time : O(nlogn)+O(n) = O(nlogn)
 */

// 先把array做sort（好的排序方式如Quick sort, Merge sort, Heap Sort）→ 花 O(nlogn)
// 排序好後就可以在O(n)的時間內找到目標總和，且不需要額外的空間來儲存 space O(1)

// function twoNumberSum(array, targetSum) {
//     array.sort((a, b) => a - b);
//     let leftPointer = 0;
//     let rightPointer = array.length - 1;
//     while (leftPointer < rightPointer) {
//       const tmpSum = array[leftPointer] + array[rightPointer];
//       if (tmpSum === targetSum) {
//         return [array[leftPointer], array[rightPointer]];
//       } else if (tmpSum < targetSum) {
//         leftPointer++;
//       } else {
//         rightPointer--;
//       }
//     }
//     return [];
//   }