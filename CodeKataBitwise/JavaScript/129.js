const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(toHexadecimal(data))});

function toHexadecimal(data){
  return parseInt(data,2).toString(16);
}
