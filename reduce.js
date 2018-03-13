//using reduce to find an average

var euros = [29.76, 41.85, 46.5]; 

var sum = euros.reduce( function(total, amount, index, array){
  if(index === array.length-1){
    return (total + amount)/array.length
  }else{
  return total + amount
  }
});
console.log(sum)