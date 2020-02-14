const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(swapEvenOdd(data).join(''))});
function swapEvenOdd(data){
  var lengthOfInput = data.length;
  var splitString = data.split('');
  for(var i =1;i<lengthOfInput;i+=2){
    [splitString[i-1],splitString[i]]=[splitString[i],splitString[i-1]];
  }
  return splitString;
}
