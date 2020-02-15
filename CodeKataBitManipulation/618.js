const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(checkIfDivisible(data))});
function checkIfDivisible(data){
  if(parseInt(data)%8==0){
    return 1;
  }
  else {
    return 0;
  }
}
