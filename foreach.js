//Write a forEach loop that prints out each name

function printNames(names){
  names.forEach(function(name){
    console.log(name);
  });
}
printNames(["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"])

//forEach() executes the callback function once for each array element; unlike map() 
//or reduce() it always returns the value undefined and is not chainable. 
//The typical use case is to execute side effects at the end of a chain.

//forEach() does not mutate the array on which it is called (although callback, if invoked, may do so).

//Question 2
//Using the above names array, write a forEach loop that
//creates a NEW array with capitalized names
function capNames(names){
  var capitalizedNames = [];
  names.forEach(function(name){
    var caps = name.toUpperCase();
    capitalizedNames.push(caps)
  })
  return capitalizedNames
}


capNames(["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"])