const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(shiftEvenOddBits(data))});
function shiftEvenOddBits(data){
  return parseInt(data).toString(2);
}
