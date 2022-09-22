let rowIndex = 4

// var getRow = function(rowIndex) {
    
//     var triangle = [[1]]

//     for( let i=1; i<=rowIndex+1; i++ ) {
//         var prevRow = triangle[i-1]
//         var curRow = [1]
    
//         for( let j=1; j<i; j++ ) {
//             var pre = prevRow[j-1]
//             var cur = prevRow[j] ? prevRow[j] : 0 // 意思是到最後一個
//             curRow.push( pre + cur )
//         }
//         triangle.push(curRow)
//     }

//     return triangle[rowIndex+1]
// }

/**
 * 不考慮只使用O(k)額外空間的情況下，只要參考LeetCode 118. Pascal's Triangle這題，就很簡單。
 * 但上面方法會超出時間，還是要用同一個陣列不斷改變裡面值的方式來做才行。
 * 毎一階的Pascal's三角形都可以重上一階算出，
 */

var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]

    var ary = [1] // 跟第一版不同的是，重複使用此陣列

    for ( let i=1; i<=rowIndex; i++ ) {
        let prev = ary[i-1]
        for( let j=1; j<i; j++ ) {
            let cur = ary[j] ? ary[j] : 0
            
            ary[j] = prev + cur
            prev = cur

            console.log(prev)
        } 
        ary.push(1)

    }
    return ary
}


console.log( getRow(rowIndex) )