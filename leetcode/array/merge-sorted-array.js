let nums1 = [1,2,3,0,0,0]
let m = 3 
let nums2 = [2,5,6]
let n = 3 

// constraints: nums1.length == m + n

var merge = function(nums1, m, nums2, n) {
    let index = 0
    
    // 將nums2加進nums1 (侵占0的位置)
    for (let i=m; i<m+n; i++) {
        nums1[i] = nums2[index]
        index++
    }

    //sorting
    for (let i=0; i<nums1.length-1; i++) {
        for ( let j=i+1; j<nums1.length; j++) {
            if (nums1[i] > nums1[j]) {
                let temp = nums1[i]
                nums1[i] = nums1[j]
                nums1[j] = temp
            }
        }
    }
    return nums1
};

console.log(merge(nums1,m,nums2,n))