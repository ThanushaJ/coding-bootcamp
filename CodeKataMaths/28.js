const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(countDigits(data))});

function countDigits(data){
  var count = 0;
  var number = parseInt(data);
 while(number>0){
    var remainder = parseInt(number%10);
    number=parseInt(number/10);
    count = count+1;

  }
  return count;
}
