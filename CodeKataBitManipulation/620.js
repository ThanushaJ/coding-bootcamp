const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
const inputArray = [];
inputValue.on("line",(data)=>{inputArray.push(data)});
inputValue.on("close",()=>{console.log(sumOfXORPairs(inputArray))});
function sumOfXORPairs(data){
  var splitData=data[1].split(" ");
  var sum =0;
  for(var i=0;i<parseInt(data[0]);i++){
    for(var j=i+1;j<parseInt(data[0]);j++){
      sum+=parseInt(splitData[i])^parseInt(splitData[j]);
    }
  }
  return sum;
}
