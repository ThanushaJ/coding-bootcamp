const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(stringLength(data))});
function stringLength(data) {
  var count = 0;
  for(var i =0;i<data.length;i++){
    if(data[i]!=' '){
      count+=1;
    }
  }
  return count;
}
