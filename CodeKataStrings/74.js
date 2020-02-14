const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(reverseWithOutVowels(data))});
var reversedString = [];
function reverseWithOutVowels(data){
  var lengthOfString = data.length;
  if(1<lengthOfString<100000){
    var splitData = data.split("");
    var l = splitData.length;
    for(var i = l-1;i>=0;i--){
      if(splitData[i]!='a' && splitData[i]!='e' && splitData[i]!='i' && splitData[i]!='o' && splitData[i]!='u'){
        reversedString.push(splitData[i]);
      }
    }
    var finalString = reversedString.join('');
    if(finalString.length==0){
      return "-1";
    }
  }
  return finalString;
}
