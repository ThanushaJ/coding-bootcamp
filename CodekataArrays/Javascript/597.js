const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
const inputArray = [];
inputValue.on("line",(data)=>{inputArray.push(data)});
inputValue.on("close",()=>{console.log(beautifulArray(inputArray))});
function beautifulArray(inputArray){
 var dataSize = inputArray[0];
 var sum =0
 var arrayElements = (inputArray[1].split(','))[0].split(' ');
 for(var i=0;i<arrayElements.length;i++){
   sum+=parseInt(arrayElements[i]);
}
if(sum%2==0 && sum%3==0 && sum%5==0){
  return 1;
}
  return 0;
}
