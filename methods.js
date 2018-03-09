//split()
//separates string into an array of substrings
function splitArr(arr){
	var newArr = arr.split(' ')
	return newArr;
}
splitArr("wolf at the door")
//=> [ 'wolf', 'at', 'the', 'door' ]


//reverse()
//reverses elements in an array
function reverseArr(arr){
	var newArr = arr.split(' ').reverse()
	return newArr;
}
splitArr("wolf at the door")
//=> [ 'door', 'the', 'at', 'wolf' ]


//join()
//join combines elements in an array into a string and separates based on what you pass in
function joinArr(arr){
	var newArr = arr.split(' ').reverse().join(' ')
	return newArr;
}
joinArr("wolf at the door")
//=> 'door the at wolf'

//toLowerCase() and toUpperCaser()
//makes a string lowercase
function lower(str){
  var smaller = str.toLowerCase()
  return smaller;
}
lower("HELLLO");
//=> 'helllo'