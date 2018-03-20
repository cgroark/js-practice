//You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  var str = num.toString()
  var final = ''
  for(var i=0;i<str.length; i++){
    if(str[i] !== '0'){
      var final = final.concat(str[i],'0'.repeat(str.length -1-i), ' + ')
    }
  }
  return final.slice(0,length-3)
}

expandedForm(4327)

//=> '4000 + 300 + 20 + 7'