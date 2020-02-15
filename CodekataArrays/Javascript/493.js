const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
const inputArray = [];
inputValue.on("line",(data)=>{inputArray.push(data)});
inputValue.on("close",()=>{console.log(compareMarks(inputArray))});
function compareMarks(inputArray){
 var inputData = (inputArray[0].split(','))[0].split(' ');
 var marksData = (inputArray[1].split(','))[0].split(' ');
 for(var i=0;i<marksData.length;i++){
   if(parseInt(marksData[i])==parseInt(inputData[1])){
     return i;
   }
 }
 return "-1";

}
