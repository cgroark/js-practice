
//return error if string contains letters outside of a-m. return 
//string with number of errors/length of test string
function printerError(string) {
  var errors =[]
   for(var i=0;i<=string.length-1; i++){
     if(string[i] > "m") {
       errors.push(string[i])
     }
   }
   return (errors.length + "/" + string.length)
}

printerError("abaxbbbbyyhwawiwjjjwwm")
//g
function printerError(string) {
  var count =0
   for(var i=0;i<=string.length-1; i++){
     if(string[i] > "m") {
      count ++
     }
   }
   return (count + "/" + string.length)
}

printerError("abaxbbbbyyhwawiwjjjwwm")
