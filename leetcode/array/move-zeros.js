let nums = [0,1,0,3,12]

var moveZeroes = function(nums) {
    var index = 0

    // for遍歷，遇到0 splice
    for(var i = 0 ; i < nums.length ; i++){
        if ( nums[i] !== 0 ) {
            nums[index++] = nums[i]
        }
    }    

    // 從index處接下去，把nums陣列長度用0補滿
    for(index; index < nums.length; index++) {
        nums[index] = 0
    } 
}