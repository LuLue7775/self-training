let nums = [1,2,3,1,2,3]
let k = 2



var containsNearbyDuplicate = function(nums, k) {
    if (nums.length <= 1) return false // 容易漏掉

    let hashMap = {}

    for ( let i in nums ) {
       
        // 若重複，直接檢查hash中的value，相減絕對值跟k比大小
        if ( hashMap[nums[i]] && ( i-hashMap[nums[i]] <=k )  ) {
            return true
        }

         // 一般情況將出現的樹放入hash, value值存入indices
        hashMap[nums[i]] = i 
    }

    return false

};