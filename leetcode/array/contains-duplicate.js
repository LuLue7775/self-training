let nums =  [1,1,1,3,3,4,3,2,4,2]

/**
 *  O(n)
 */
var containsDuplicate = function(nums) {
    let hashMap = {}
    
    for( let num of nums ) {
        if ( hashMap[num] ) return true 
        else hashMap[num] = true
    }

    return false
};


console.log(containsDuplicate(nums))