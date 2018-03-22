function minMax(arr){
var sorted = arr.sort(function(a,b) { 
  return a - b; 
  });  
console.log(sorted)
  var minmax= []
  minmax.push(sorted[0], sorted[sorted.length-1])
  return minmax
}

minMax([1,14,26,8,9,2])

// When such a function is passed into array.sort(), 
// the array elements are sorted based on the relationship between each pair of 
// elements "a" and "b" and the function's return value. 
// The three possible return numbers are: <0 (less than 0), 0, or >0 (greater than 0):

// Less than 0: Sort "a" to be a lower index than "b"
// Zero: "a" and "b" should be considered equal, and no sorting performed.
// Greater than 0: Sort "b" to be a lower index than "a".

//This works the way it does because whenever "a" is less than "b", 
//a negative value is returned, which results in the smaller elements 
//always appearing to the left of the larger ones, in other words, ascending. 


