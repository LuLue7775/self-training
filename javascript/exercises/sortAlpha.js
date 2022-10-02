
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
ascendingOrder([1, 5, 2, 3, 4]);

function reverseAlpha(arr) {
    return arr.sort(( a, b ) => a === b ? 0 : a < b ? 1 : -1)
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);


/**
 * immutable version
 */

 const globalArray = [5, 6, 3, 2, 9];

 function nonMutatingSort(arr) {
   // Only change code below this line
   return [].concat(arr).sort((a, b) => a-b)
 
   // Only change code above this line
 }
 
 nonMutatingSort(globalArray);
 