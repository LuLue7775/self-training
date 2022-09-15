/**
 * ES8 
 * Lodash
 */


// Regex

//.test() .match()

// OR 

// ignore case => i flag

// extract a pattern more than once => g flag 

// Match Anything with Wildcard Period => dot
var unRegex = /.un/; 
var result = unRegex.test(exampleStr);

// a CHAR occur more than once => + sign
// a CHAR occur zero or more times => * sign

// lazy matching => ? sign
var text = "<h1>Winter is coming</h1>";
var myRegex = /<.*?>/; // Change this line
var result = text.match(myRegex);

// match beginning string patterns => ^ sign (when iy's outside of [] )
// match end string patterns => $ sign

// match all letters and num => \w sign
// match none letters and num => \W sign = [^A-Za-z0-9_]

// match all num => \d sign 
// match none num => \D sign  = [^0-9]

// match whitespace \s sign 
// match none whitespace \S sign 

// times of occurance => {3, 6} 

// Check for All or None
let britishRegex= /colou?r/;

// Positive and Negative Lookahead

// Use Capture Groups to Search and Replace
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");