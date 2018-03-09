// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.


function XO(str) {
  var Oh =[];
  var Xx = [];
  for(var i=0; i<str.length; i++){
    var each = str[i].toLowerCase();
    if(each == "O" || each == "o"){
      Oh.push(each)
    }
    else if(each == "x" || each == "X"){
      Xx.push(each)
    }
  }
  if((Oh.length == Xx.length) || (Oh.length == 0 && Xx.length ==0)) {
    return true
  }else{
    return false
  }
}

XO("yyy");