function reverseString(string){
  var reversed = ''
  var split = string.split('')
  for(var i=split.length-1;i>=0;i--){
    reversed = reversed.concat(split[i])
  }
  return reversed
}

reverseString("put my thing down flip and reverse it")