const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(incrementChar(data))});
function incrementChar(data){
  if(1<=data.length<=100000){
    var splitData = [...data];
    for(var i = 0;i<data.length;i++){
      if(splitData[i]!=" "){
        if(splitData[i]==splitData[i].toUpperCase()){
          var shift = ((splitData[i].charCodeAt(splitData[i]))-62)%26+65;
            splitData[i] = String.fromCharCode(shift);
        }
        else {
          var shift = ((splitData[i].charCodeAt(splitData[i]))-94)%26+97;
            splitData[i] = String.fromCharCode(shift);
        }

      }
      }
    var finalData = splitData.join('');
  }
return finalData;
}
