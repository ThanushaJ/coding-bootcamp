const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
const inputArray = [];
inputValue.on("line",(data)=>{inputArray.push(data)});
inputValue.on("close",()=>{console.log(checkBitSet(inputArray))});
function checkBitSet(data) {
  var number = parseInt(data[0]).toString(2);
  var splitData = number.split('');
  //return parseInt(splitData[splitData.length-1]) == 1;
  if(parseInt(splitData[splitData.length-data[1]]) == 1){
    return true;
  }
  else {
    return "False";
  }
}
