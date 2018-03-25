
function isPangram(string){
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  var alphs = alph.split('')
  var string = string.toLowerCase()
  for(var i = 0; i<alphs.length; i++){
    if(string.indexOf(alphs[i]) === -1){
      return false
    }
  }
  return true
}
isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ")