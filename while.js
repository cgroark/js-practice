


function countBeer(){
  var beer = 100
  while(beer >= 0){
    if(beer > 1){
      console.log(`${beer} bottles of beer on the wall, ${beer} bottles of beer. Take one down, pass it around, ${beer -1} bottles of beer on the wall.`);
        var beer = beer - 1
    }else if(beer == 1){
      console.log(`${beer} bottle of beer on the wall, ${beer} bottle of beer. Take one down, pass it around, ${beer -1} bottles of beer on the wall.`)
      var beer = beer - 1
    }else{
      console.log("no bottles of beer on the wall!")
      var beer = beer -1
    }
  }
}
countBeer();