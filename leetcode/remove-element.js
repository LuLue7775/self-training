let nums = [3, 1, 2, 3, 2]
let val = 3  

// 這跟 LeetCode 283. Move Zeroes 很像

// var removeElement = function(nums, val) {
//     let ptr
//     let arrLength = nums.length

//     for( let i=0; i<arrLength; i++ ) {
//         if ( nums[i] === val ) {
//             nums.shift()
//             arrLength--
//             console.log(nums)
//         } else {
//             ptr++
//         }
//     }
//     // return nums
// };


var removeElement = function(nums, val) {
    if (!nums.length) return nums.length
    if(nums.indexOf(val) < 0) return nums.length

    let ptr 
    for( let i=0; i<nums.length; i++ ) {
        if(nums[i] !== val) nums[ptr++] = nums[i]
    }
    

}
console.log(removeElement(nums,val))