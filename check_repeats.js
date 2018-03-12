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
