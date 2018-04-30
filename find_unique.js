function lonelyInteger(arr) {
  for(var i=0; i<arr.length; i++){
    var indices = []
    var element = arr[i];
    var idx = arr.indexOf(element);
    while(idx != -1){
      indices.push(idx);
      idx=arr.indexOf(element, idx+1)
    }
    if(indices.length === 1){
      return arr[i];
    }
  }
}

lonelyInteger([3,4,3,4,6])
// 6