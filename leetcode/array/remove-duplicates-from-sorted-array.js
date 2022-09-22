let nums = [0,0,1,1,1,2,2,3,3,4]

// 只對一半
// var removeDuplicates = function(nums) {
//     let preNum = nums[0]
//     let cnt = 1

//     for ( let i=0; i<nums.length; i++ ) {
//         if ( nums[i] !== preNum ) {
//             cnt++
//         } 
//         preNum = nums[i]
//     }
//     return cnt
// }


var removeDuplicates = function(nums) {
    // if (!nums) return 0
    // if (nums.length === 1) return 1

    var count = 0;
    for (var i = 1 ; i < nums.length ; i++){
        if (nums[count] !== nums[i]) {
            count++;
            nums[count] = nums[i];
        }
    }    
    console.log(nums)
    return ++count;
}

// FP way
// Modifying the array in place during an iteration while offsetting the incrementor.
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};


console.log(removeDuplicates(nums))