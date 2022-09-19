
// let nums1 = [1,2,2,1]
// let nums2 = [2,2]

let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]

var intersection = function(nums1, nums2) {
    let result = []
    let store // long ary
    let ary // short ary
    
    if ( nums1.length < nums2.length ) {
        store = nums2
        ary = nums1 
    } else {
        store = nums1
        ary = nums2 
    }

    for ( let i=0; i<ary.length; i++ ) {

        if ( store.indexOf(ary[i]) >= 0 && 
            result.indexOf(ary[i]) === -1 ) {

            result.push(ary[i])
        }
    } 
    return result
}

console.log(intersection(nums1, nums2))
