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

//concat()
//combine two strings
function concatsss(string1, string2){
  return string1.concat(string2)
}
concatsss('oqiwcnwq', 'qowcnqw')
//can add in extra elements too == string1.concat('  ', string2)

//same with arays == array1.concat(array2)

//=> 'oqiwcnwqqowcnqw'

//join()
//join combines elements in an array into a string and separates based on what you pass in
function joinArr(arr){
	var newArr = arr.split(' ').reverse().join(' ')
	return newArr;
}
joinArr("wolf at the door")
//=> 'door the at wolf'

//toLowerCase() and toUpperCase()
//makes a string lowercase
function lower(str){
  var smaller = str.toLowerCase()
  return smaller;
}
lower("HELLLO");
//=> 'helllo'

//pop()
//removes last element from an array and returns it
function popp(arr){
  console.log(arr.pop(0))
  console.log(arr)
}
popp(['apple','beer','plant','garden'])
// garden
//[ 'apple', 'beer', 'plant' ]

//push()
//adds elements to end of array and returns the new length of array
function push(arr,other){
  console.log(arr.push(other))
  console.log(arr)
}
push(['apple','beer','plant','garden'],"artic char")
//5
//[ 'apple', 'beer', 'plant', 'garden', 'artic char' ]

//shift()
//removes the first element in an array and returns it 
function shift(arr){
  console.log(arr.shift())
  console.log(arr)
}
shift(['apple','beer','plant','garden'])
//apple
//[ 'beer', 'plant', 'garden' ]

//unshift()
//adds one or more elements to beginning of array and returns the new length
function unshift(arr){
  console.log(arr.unshift('bananana','pansies'))
  console.log(arr)
}
unshift(['apple','beer','plant','garden'])
//6
//[ 'bananana', 'pansies', 'apple', 'beer', 'plant', 'garden' ]

//indexOf()
//returns index of a given element in an array. If not present, returns -1
//You can use the fromIndex as the second parameter to say index at which to start searching
//always searches left to right, but if you use a negative as a search parameter will count back
//from end but stil count left to right
function indexOf(arr){
  console.log(arr.indexOf('beer',3));
  console.log(arr);
}
indexOf(['apple','pabst','beer','plant','garden'])
//-1
//[ 'apple', 'pabst', 'beer', 'plant', 'garden' ]
function indexOf(arr){
  console.log(arr.indexOf('beer',1));
  console.log(arr);
}
indexOf(['apple','pabst','beer','plant','garden'])
//2
//[ 'apple', 'pabst', 'beer', 'plant', 'garden' ]

//check to see how many times an element is present in an array
var indices =[];
var array = ['apple','pear','apple','apple','nbannana'];
var element = "apple";
var idx = array.indexOf(element);

while(idx != -1){
  indices.push(idx)
  idx = array.indexOf(element, idx + 1)
}
console.log(indices);

//add item to array if it does not already exist
function checkIt(arr, item){
  if(arr.indexOf(item) === -1){
    arr.push(item);
  }
  console.log(arr)
}
checkIt(['apple', 'beer', 'potato'],'wine')

//lastIndexOf()
//returns last occurence of a given element in an array
function lastIndex(array, element){
  console.log(array.lastIndexOf(element))
}
lastIndex(['apple','pear','apple','apple','nbannana'],'apple')
//3

//slice()
//returns items between start and end indices in array or string. Start index is inclusive and end index is exclusive
//if no end index given, return from start to end of array
//does not change original array
function sliceIt(array,start,end){
  console.log(array.slice(start,end));
  console.log(array)
}
sliceIt(['apple','pear','apple','apple','nbannana'],1,4)
//[ 'pear', 'apple', 'apple' ]
//[ 'apple', 'pear', 'apple', 'apple', 'nbannana' ]
//works on strings too-
function sliceIt(string,start,end){
  console.log(string.slice(start,end));
  console.log(string)
}
sliceIt("elephant",1,4);
//lep
//elephant

//repeat()
//returns a string concatenated to itself a given number of times
//str.repeat(integer)
function towerBuilder(nFloors) {
  var arr = []
  while(nFloors>0){
    arr.unshift('*'.repeat(nFloors))
    nFloors -=1
  }
  return arr
}
towerBuilder(4)
//=> [ '*', '**', '***', '****' ]

//trim()
//removes white space from beginning and end of string
console.log("   nothing  ".trim());
//nothing

//toString()
//convert integer to string
function expandedForm(num) {
  var str = num.toString()
  return str
}

expandedForm(4300)

//'4300'

