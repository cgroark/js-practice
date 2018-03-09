//Calculate the row sums of this triangle from 
//the row index (starting at index 1) e.g.:

//       1
        //  3     5
      // 7     9    11
  // 13    15    17    19
//21    23    25    27    29



function rowSumOddNumbers(n) {
	var first = Number((n*(n-1))+1)
	var total = 0;
	var i = 0;
	while(i<n){
	  total += first
	  first += 2
	  i++
	}
	return total;
}
rowSumOddNumbers(14);