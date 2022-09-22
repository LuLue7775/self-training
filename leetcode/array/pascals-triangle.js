let numRows = 5

// 注意這種跟位置有關的，常用技巧就是 不存在=>填零

// 失敗的，留著反省一下
// var generate = function(numRows) {
//     if (numRows === 1) return [[1]]
//     if (numRows === 2) return [[1], [1, 1]]

//     let lastRow = [1, 1]
//     let newRow = [1]
//     for ( let i=1; i<numRows-1; i++ ) {
//         newRow.push( lastRow[i-1]+lastRow[i] )
//     }
    
// };

var generate = function(numRows) {
    if (!numRows) return []

    var triangle = [[1]]
    
    for( let i=1; i<numRows; i++) {
        var prevRow = triangle[i-1]
        let curRow = [1] //每列的第一個數字都是從1開始

        for( let j=1; j<=i; j++ ) {
            var pre = prevRow[j-1]
            var cur = prevRow[j] ? prevRow[j] : 0 // 意思是到最後一個
            curRow.push( pre + cur )
        }
        triangle.push(curRow)
    }

    return triangle
}