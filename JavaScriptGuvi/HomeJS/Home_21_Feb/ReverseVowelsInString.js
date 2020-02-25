const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(reverseStringVowels(data))});

function isVowel(s){
  var c = s.toUpperCase();
  if(c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
    return true;
  }
  return false;
}
function reverseStringVowels(data){
  var i;
  var j=0;
  var vowels = [];
  var word = data.split('');
  var result;
  for(i=0;i<data.length;i++){
    if(isVowel(word[i])){
      vowels.push(word[i]);
      j++;
    }
  }
  for(i=0;i<data.length;i++){
    if(isVowel(word[i])){
        j--;
      word[i]=vowels[j];
    }

  }
  return word.join('');
}
