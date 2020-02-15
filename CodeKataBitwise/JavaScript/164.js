const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(findFirstOne(data))});
function findFirstOne(data){
  var binaryData =parseInt(data).toString(2);
 var arrayData = [...binaryData];
  for(var i =arrayData.length-1;i>=0;i--){
  if(arrayData[i]=='1'){
      return arrayData.length-i;
    }
  }
}
