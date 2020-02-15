const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
const inputArray = [];
inputValue.on("line",(data)=>{inputArray.push(data)});
inputValue.on("close",()=>{console.log(arrayXOR(inputArray))});
var result =0;
function arrayXOR(data) {
var numberArray = data[1].split(' ');
for(var i=0;i<numberArray.length;i++){
  result = result^numberArray[i];
}
return result;
}
