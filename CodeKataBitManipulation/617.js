const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(countOnes(data))});
function countOnes(data){
  var count =0;
  var splitBinaryNum = (parseInt(data).toString(2)).split('');
  for(var i=0;i<splitBinaryNum.length;i++){
    if(splitBinaryNum[i]==1){
      count++
    }
  }
  return count;
}
