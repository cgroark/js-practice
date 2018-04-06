function reverseWords(str) {
  let splitted = str.split(' ');
  let string = '';
  for(var i=0; i<splitted.length; i++){
    let letter = splitted[i].split('');
    let reverse = [];
    for(var j=0;j<letter.length; j++){
      reverse.unshift(letter[j])
    }
    reverse = reverse.join('');
    string = string.concat(reverse, ' ');
  }
  return string.slice(0,string.length -1);
}

console.log(reverseWords('run to the river'))
