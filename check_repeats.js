// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  var arr = str.toLowerCase().split('')
  var newArr = []
  for(var i=0; i<arr.length;i++){
    if(newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i])
    }else{
      return false
    }
  }
  return true
}

isIsogram("pOtato")

// check

// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  var arr = text.toLowerCase().split('')
  var newArr = []
  var another = []
  count = 0;
  for(var i=0; i<arr.length;i++){
    if(newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i])
    }else{
      if(another.indexOf(arr[i]) == -1){
      another.push(arr[i])
      count ++
      }
    }
  }
  return count
}

//with filter
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}