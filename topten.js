function topssten(array){
  var sorted = array.sort(function(a,b){
    return b-a
  })
  console.log(sorted.slice(0,10))
}

topssten([3,67,8,456,2,9,678,234,1,9,267,89,45,234,5,6])

//without slice

function topTen(array){
 var topten = []
 for(var i=0; i<array.length; i++){
  if(topten.length < 10){
    topten.push(array[i])
    var sorted = topten.sort(function(a,b){
      return a-b
    })
  }
  else if(array[i]>topten[0]){
    topten.push(array[i])
    topten.shift(0)
  }
 }
 return topten.sort(function(a,b){
   return b-a
 })
}


topTen([3,67,8,456,2,9,678,234,1,9,267,89,45,234,5,6])
