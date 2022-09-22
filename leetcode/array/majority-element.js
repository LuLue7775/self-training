let nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
    let hashMap = {}
    if ( nums.length === 1 ) return nums[0]  // 很容易忽略

    for ( let i=0; i<nums.length; i++ ) {
        if ( !hashMap[nums[i]] ) hashMap[nums[i]] = 1
        else { 
            hashMap[nums[i]]++ 
            if ( hashMap[nums[i]] >= nums.length/2 ) return nums[i]
        }
    }

}