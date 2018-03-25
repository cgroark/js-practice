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

//find longest panlindrome in string

longestPalindrome=function(s){
  var longest = 0;
  var length = s.length;

  for(var i=0; i < length; i++){
    for(var j = i+1; j <= length; j++) {
      var str = s.slice(i,j);
      var l = str.length
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  var arr = s.split("");
  return s == arr.reverse().join("");
}