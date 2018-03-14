//find the one number in an array that doesn't match the others

function stray(numbers) {
  numbers.sort()
  if(numbers[0] !== numbers[1]){
    return numbers[0]
  }else return numbers[numbers.length-1]
}

stray([27, 27, 1, 27, 27, 27, 27])