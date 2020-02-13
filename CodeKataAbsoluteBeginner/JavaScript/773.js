const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(factorial(data))});
function factorial(data){
  var num = parseInt(data);
  var fact =1 ;
  for(var i =1;i<=num;i++){
    fact*=i;
  }
  return fact;
}
