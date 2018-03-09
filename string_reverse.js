// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


//reverse entire phrase
function reverse(stringTest){
  var newString = stringTest.split('').reverse().join('')
  return newString
  }
reverse("a wolf at the door");
//split() method separates a string into an array of substrings separated by indicator ("")
//reverse() method reverses elements in an array
//join method combines elements in an array into a string based on indicator ("")


function reverseAgain(string){
  var newString2 = []
  for(var i=string.length-1; i>=0; i--){
    newString2 += string[i];
  }
  return newString2;
}
reverseAgain("a wolf at the door");
//start at end of string and add each to start of new string variable 

//reverse each word if greater than 5 letters, but keep words in order

function reverse(string){
  var reversedString = []
  var newString = string.split(" ");
  for(var i=0; i<newString.length;i++){
    var reversedWord = newString[i].split('').reverse().join('')
    var final = reversedString.push(reversedWord)
  }
return reversedString.join(' ')
}
console.log(reverse("the wolf at the door"))