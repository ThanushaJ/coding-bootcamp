const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(countConsecutiveOnes(data))});
function countConsecutiveOnes(data){
var splitData = data.split('');
var max = 0;
var count = 0;
for(var i=0;i<splitData.length;i++){
  if(splitData[i]=='1'){
    count++;
    if(count>max){
      max = count;
      }
  }
  else {
    count =0;
  }
}
if(max!=0){
  return max;
}
else {
  return "-1";
}
}
