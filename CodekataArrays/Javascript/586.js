const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
const inputArray = [];
inputValue.on("line",(data)=>{inputArray.push(data)});
inputValue.on("close",()=>{console.log(checkDifference(inputArray).join(' '))});
function checkDifference(inputArray){
  var outputArray =[];
  var inputData = (inputArray[0].split(','))[0].split(' ');
  var arrayElements = (inputArray[1].split(','))[0].split(' ');
  for(var i=0;i<arrayElements.length;i++){
    if(Math.abs(parseInt(arrayElements[i])-parseInt(arrayElements[i+1]))>parseInt(inputData[1])){
      outputArray.push(1);
    }
    else {
      outputArray.push(0);
    }
  }

  return outputArray;
}
