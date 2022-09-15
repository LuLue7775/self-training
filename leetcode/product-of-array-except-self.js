let nums = [1,2,3,4]
let nums2 = [-1,1,0,-3,3]

/**
 * 左和右錯位的方式，巧妙避開當下index值
 */
var productExceptSelf = function(nums) {
    if (nums === null || nums.length <= 1) {
        return [];
    }
    let productFromLeft = 1, productFromRight = 1;
    let res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        res[i] = productFromLeft;
        productFromLeft *= nums[i];
    }
    for (let i = nums.length-1; i >= 0; i--) {
        res[i] *= productFromRight;
        productFromRight *= nums[i];
    }
    return res

};

console.log(productExceptSelf(nums2))