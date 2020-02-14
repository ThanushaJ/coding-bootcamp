const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(isNumeric(data))});
function isNumeric(data){
if(!isNaN(data))
return 'yes';
else
return 'no';
}
