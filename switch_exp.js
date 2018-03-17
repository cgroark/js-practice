//Implement a function likes :: [String] -> String, which must take in input array, 
//containing the names of people who like an item. It must return the display text as shown in the examples:
//

function likes(names) {
  
  switch(names.length){
    case 0: 
      return "no one likes this";
      break;
    case 1: 
      return names[0] + " likes this";
      break;
    case 2: 
      return names[0] + ' and ' + names[1] + " like this";
      break;
    case 3: 
       return names[0] + ', ' + names[1] +" and " + names[2]  + " like this"
       break;
    default:
     return names[0] + ', ' + names[1] + " and " + (names.length -2) + " others like this"
  }
}


function arithmetic(a, b, operator){
  switch(operator){
    case "add":
      return a + b;
      break;
    case "subtract":
      return a - b;
      break;
    case "divide":
      return a / b;
      break;
    case "multiply":
      return a * b;
      break;
    default:
      return "no operator given"
  }  
    
}

arithmetic(3,4,"multiply");