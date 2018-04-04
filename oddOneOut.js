function findBlackSheep(array){
    if(array[0] && array[1] % 2 === 0){
      let oddOut = array.filter(function(num){
        return num % 2 === 1;
      })
      return oddOut.pop()
    }else{
      let oddOut = array.filter(function(num){
        return num % 2 === 0;
      })
      return oddOut.pop()
    }
}
findBlackSheep([32, 52, 12, 101, 42, 112, 26012, 352])

//=> 101