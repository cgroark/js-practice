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



const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

 const totalyear = inventors.reduce((total, person)=> {
      return total + (person.passed - person.year)
      
    },0);
    
    console.log(totalyear)

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const tranport = data.reduce(function(obj, item){
      if(!obj[item]){
        obj[item] = 0;
      }
      obj[item]++
      return obj
    }, {})
    console.log(tranport)

    