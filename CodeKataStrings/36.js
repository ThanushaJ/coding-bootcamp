const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(checkEquality(data))});
function checkEquality(data){
  var words = data.split(" ");
  if(words[0]===words[1]){
    return "yes";
  }
  else {
    return "no";
  }
}
