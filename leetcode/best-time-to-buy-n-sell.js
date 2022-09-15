let prices =  [7,6,4,3,1]
let prices2 =  [7,1,5,3,6,4]
/**
 * Brutal force
 *  ** time exceed! 
 */
var maxProfit = function(prices) {
    let marginMax = 0
    for( let i=0; i<prices.length; i++ ) {
        for( let j=i+1; j<prices.length; j++ ) {
            marginMax = Math.max( marginMax,prices[j]-prices[i] )
        }
    } 
    return marginMax

};

var maxProfit2 = function(prices) {
    let maxProf = 0
    let minVal = Infinity

    for ( let i=0; i<prices.length; i++ ) {
        minVal = Math.min(minVal, prices[i]) // 邊iterate邊找到最小值
        
        maxProf = Math.max(maxProf, prices[i]-minVal ) // 馬上比大小。 若minVal是此index值，差就會是0，所以不會有減到前面數字的問題
    }
    return maxProf 
};
console.log(maxProfit2(prices) )
