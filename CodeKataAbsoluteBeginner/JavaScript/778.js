const readline = require('readline');
const inputValue = readline.createInterface({input: process.stdin});
inputValue.on("line",(data)=>{console.log(square(data))});
function square(data){
  var N = parseInt(data);

  if(N<0){
    return "Error";
  }
  else if(N==0){
    return "0";
  }
  else {
    return N**2;
  }
}
