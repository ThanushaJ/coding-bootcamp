const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(largestNumberInString(data))});
function largestNumberInString(data){
  var splitData = data.split(' ');
  var numbers = [];
  for(var i = 0;i<splitData.length;i++){
    if(!isNaN(splitData[i])){
      numbers.push(parseInt(splitData[i]));
    }
  }
  numbers.sort(function(a,b){return a-b;});
  return numbers[numbers.length-1];
}
