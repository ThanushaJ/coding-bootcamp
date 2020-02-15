const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(countOnes(data))});
var numberData = [];

function countOnes(data){
  var splitData = data.split(" ");
  var count =0;
  for(var i =0;i<splitData.length;i++){
    numberData.push(parseInt(splitData[i]));
  }
  var result = numberData[0]^numberData[1];
  var binaryResult = result.toString(2);
  var binarySplit = [...binaryResult];
  for(var j =0;j<binarySplit.length;j++){
    if(binarySplit[j]==1){
      count++;
    }
  }
  return count;

}
