
//add ten to each number in an array

function addTen(arr){
  var tenMore = arr.map(function(num){
    return num + 10;
  })
  return tenMore
}

addTen([4,7,8])


//map takes in an array and returns new array of same lengt after calling a function on 
//each element
//calls callback on each element and does not mutate og array


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

const names = inventors.map(function(inv){
      return inv.first + ' ' + inv.last
    });
    console.log(names)


//["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", "Lise Meitner", "Hanna Hammarström"]

//using map and filter-
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
   
    // const links = select.querySelectorAll('a');
    //need to convert line above into an array in order to use map function
    //two options-
     // const links = Array.from(select.querySelectorAll('a'));
     //const links =  [...const links = select.querySelectorAll('a')]; //ES6 spread method
    const select = document.querySelector('.mw-category');
    const links = Array.from(select.querySelectorAll('a'));
    const de = links
      .map(link => link.innerText)
      .filter(streetName => streetName.includes('de'))

      