const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(incrementChar(data))});
function incrementChar(data){
  if(1<=data.length<=100000){
    var splitData = [...data];
    for(var i = 0;i<data.length;i++){
      if(splitData[i]!=" "){
        var d = splitData[i].charCodeAt(splitData[i]);
        splitData[i] = String.fromCharCode(d+3);
      }
      }
    var finalData = splitData.join('');
  }
return finalData;
}
