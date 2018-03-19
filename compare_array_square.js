function comp(array1, array2){
  if(array1 === null || array2 == null){
    return false
  }
  else if(array1.length == 0 && array2.length == 0){
    return true
  }
  else if(array1.length !== array2.length){
    return false
  }
  else if (array1.length >0 && array2.length >0){
  array1 = array1.sort(function(a,b){
    return a-b;
  })
  array2 = array2.sort(function(a,b){
    return a-b;
  })
  }
  else{
    return false
  }
  for(var i=0; i<array1.length; i++){
    if(Math.pow(array1[i],2) !== array2[i]){
      return false
    }
  }
  return true
}

