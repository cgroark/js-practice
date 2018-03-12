// Given: an array containing hashes of names

// Return: a string formatted as a list of 
// names separated by commas except for the last two names, 
// which should be separated by an ampersand.

function list(names){
  var str = ''
  console.log(names.length)
  for(var i=0; i<=names.length;i++){
    if(names.length == 0){
      allNames = str
    }
    else if(names.length ==1){
      allNames = str.concat(names[0].name)
    }
    else if(i<names.length-2){
      var allNames = str.concat(names[i].name + ', ')
      var str = allNames
    }else if(i== names.length-2){
      var allNames = str.concat('' + names[i].name)
      var str = allNames
    }
    else if(i==names.length-1){
      var allNames = str.concat(' & ' + names[i].name)
    }
  }
  return allNames
}


list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])

////////

function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }