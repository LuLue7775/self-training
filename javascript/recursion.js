/**
 *  Basecase, Action, Recursion
 *  note: dynamic programming can optimizing recursice calls
 *        trampolining uses HOF and iteration to capture recursion and reduce space complexity
 *        corecursion generates data from a seed value
 */

// easy: real-life examples1. For continuation token from an API (some paginated results)
const getAWSProductIdImages = async () => {
    
    // get data with await fetch request
    if ( data.IsTruncated ) { // did we got all the data
        // recursive
        return await getAWSProductIdImages(
            productId, 
            s3,
            resultArray, 
            data.NextContinuationToken
        )
    }

    return resultArray
}

// easy: real-life examples2. A parser: e.g. 
// directories
// the DOM - a web crawler
// an exl on JSON data export 

const artistsByGenre = {
    jazz: [ "Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal"]
    }
}

// so it's basically flattening
const getArtistNames = (dataObj, arr=[]) => {
    Object.keys(dataObj).forEach( key => {
        if ( Array.isArray(dataObj[key]) ) {
            return dataObj[key].forEach( artist => {
                arr.push(artist)
            })
        }
        getArtistNames(dataObj[key], arr)
    })

    return arr
}

// console.log(getArtistNames(artistsByGenre))

/**
 * easy: Reverse print using recursion
 * It the concept of "Stack"
 */

 function reversePrint( arr ) {
    if ( arr.length === 0 ) return

    reversePrint(arr.slice(1))
    console.log(arr[0])
}

/**
 * easy: Sum First N Elements Using Recursion
 */

function sum( arr, n ) {
    if ( n===0 ) return 0

    return arr[n-1] + sum(arr, n-1)
}

console.log(sum([2,3,4,5], 3))