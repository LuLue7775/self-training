let nums1 = [ 1, 2, 2, 1 ]
let nums2 = [ 2, 2 ]

// 和第一版不同的是結果可重複
var intersect = function(nums1, nums2) {
  let store = []
  let arr = []
  let dup = []
  
  if ( nums1.length < nums2.length ) {
        store = nums2
        arr = nums1 
    } else {
        store = nums1
        arr = nums2 
    }

    for ( let i=0; i<arr.length; i++ ) {
        if ( store.indexOf(arr[i]) ) {
            store[store.indexOf(arr[i])] = null // 容易漏掉，參考陣列已經對過的要拿掉，否則重複對
            dup.push(arr[i])
        }
    }
    return dup

};

console.log(intersect(nums1, nums2))