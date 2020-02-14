const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(checkPalindrome(data))});
function checkPalindrome(data){
  var i;
  var j;
  var splitData = [...data];
  for(i=0,j=data.length-1;j>i;i++,j--){
    if(splitData[i]!=splitData[j]){
      return 'no';
    }
  }
  return 'yes';
}
