function palindrome(string){
  var splits = string.split('')
  for(var i=0;i<splits.length;i++){
    if(splits[i] !== splits[splits.length-i-1]){
      return false
    }
  }
  return true
}

palindrome("racecar")