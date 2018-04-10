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

//forEach with closure (function withing a function)
function nameLengths(names){
  var totalNumberOfLetters = 0;
  names.forEach(function(name){
    console.log(totalNumberOfLetters, name.length);
    totalNumberOfLetters = totalNumberOfLetters + name.length;
  })
  console.log("Total letters: " + totalNumberOfLetters);
}

nameLengths(["Bob", "Sally", "Jane", "Jim", "Taylor", "Pat"]);

////
var books = [
  { title: "Stranger in a Strange Land", author: "Robert Heinlein"},
  { title: "The Moon is a Harsh Mistress", author: "Robert Heinlein"},
  { title: "Childhood's End", author: "Arthur C. Clarke"},
  { title: "Slaughterhouse 5", author: "Kurt Vonnegut"},
  { title: "Cat's Cradle", author: "Kurt Vonnegut"},
  { title: "Breakfast of Champions", author: "Kurt Vonnegut"},
  { title: "A Scanner Darkly", author: "Phillip K. Dick"},
  { title: "Do Androids Dream of Electric Sheep", author: "Phillip K. Dick"}
];

function print(){
  books.forEach(function(book){
    console.log(book.title)
  })
}

print()

///show number of books by KV
let books = [
  { title: "Stranger in a Strange Land", author: "Robert Heinlein"},
  { title: "The Moon is a Harsh Mistress", author: "Robert Heinlein"},
  { title: "Childhood's End", author: "Arthur C. Clarke"},
  { title: "Slaughterhouse 5", author: "Kurt Vonnegut"},
  { title: "Cat's Cradle", author: "Kurt Vonnegut"},
  { title: "Breakfast of Champions", author: "Kurt Vonnegut"},
  { title: "A Scanner Darkly", author: "Phillip K. Dick"},
  { title: "Do Androids Dream of Electric Sheep", author: "Phillip K. Dick"}
];


let totalBooksByKV = 0;

function vonn(){
  books.forEach(function(book){
    if(book.author === "Kurt Vonnegut"){
      totalBooksByKV++
    }
  })
  return totalBooksByKV
}

console.log(vonn())

