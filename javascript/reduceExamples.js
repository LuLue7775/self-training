/**
 * Example one: data extracting and calculating
 */

// The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  function getRating(watchList) {
    // Only change code below this line
      let nolanData = watchList.reduce((data, { Director: director, imdbRating: rating}) => { 
        if(director === 'Christopher Nolan') {
          data.count++
          data.sum += Number(rating)
        }
        return data
     }, {sum: 0, count:0} );
  
    // Only change code above this line
    return nolanData.sum / nolanData.count ;
  }
  
//   console.log(getRating(watchList));


/**
 * 2. raw data to json
 */


const rawData = `
    1,Donnamarie,Jemison,djemison0@ifeng.com,Female
    2,Herculie,Chadbourne,hchadbourne1@opensource.org,Male
    3,Shepperd,Luquet,sluquet2@so-net.ne.jp,Male
    4,Sinclare,Nuttey,snuttey3@tmall.com,Male
`


/**
 * 3. Find the maximum in an array
 */

// console.log( [3, 5, 4, 3, 6, 2, 3, 4].reduce((a, i) => Math.max(a, i), -Infinity) )

const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]
 
const max = students.reduce((acc, student) => {
    if(acc === null || student.score > acc) 
        return student.score
    return acc
}, null)
 
// console.log(max)


/**
 * 4. Concatenating uneven arrays
 */
let data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"], 
    ["this","is","a","long","sentence"]
]

let dataConcat = data.map( item => item.reduce(( acc, i ) => `${acc} ${i}` )  )
// console.log(dataConcat)

/**
 * 5. Removing duplicates in an array:
 */
let dupes = [1,2,3,'a','a','f',3,4,2,'d','d']
let withoutDupes = dupes.reduce(( notDup, cur ) => {
    if ( notDup.indexOf(cur) === -1 ) notDup.push(cur)
    return notDup
}, [])

// console.log(withoutDupes)

/**
 * 6. Validating parenthesis
 */

 let validatedStr = [..."(())()(()())"].reduce(( a, i ) => i === '(' ? a+1 : a-1, 0)

/**
 * 7. Group by property
 */

 let obj = [
    {name: 'Alice', job: 'Data Analyst', country: 'AU'},
    {name: 'Bob', job: 'Pilot', country: 'US'},
    {name: 'Lewis', job: 'Pilot', country: 'US'},
    {name: 'Karen', job: 'Software Eng', country: 'CA'},
    {name: 'Jona', job: 'Painter', country: 'CA'},
    {name: 'Jeremy', job: 'Artist', country: 'SP'},
  ]

 let groupByCountry = obj.reduce(( group, curP ) => {
    let newKey = curP['country']
    if ( !group[newKey] ) group[newKey] = []
    group[newKey].push(curP)

    return group
 }, [])

/**
 * 8. Flattened an array of arrays
 * only for 1 level deep array
 */

let flattened = [[3, 4, 5], [2, 5, 3], [4, 5, 6]].reduce(( acc, singleArr ) => 
    acc.concat(singleArr) , []
)

// [ [3, 4, 5],
//   [2, 5, 3],
//   [4, 5, 6]
// ].flat()


/**
 * 9. Power only positive numbers
 */
let posPow = [-3, 4, 7, 2, 4].reduce((acc, cur) => {
    if ( cur > 0 ) acc.push( cur**2 )
    return acc
}, [])

/**
 * 10. Reverse a string
 */
let revStr = str => [...str].reduce((acc, letter) => letter+acc )

/**
 * 11. Binary to decimal
 * (10111)->1+(1+(1+(0+(1+0*2)*2)*2)*2)*2
 */
const bin2dec = str => [...String(str)].reduce((acc, cur) => +cur + acc*2, 0)
// console.log(bin2dec('1011'))
/**
 * Counting Occurrences of Items in an Array Using reduce()
 */

/**
 * Converting Between Types Using reduce() : reduce an array to any other data type.
 */
 const people = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]
 
 const namesArray = people.reduce((acc, cur) =>  [...acc, cur.name] , [])