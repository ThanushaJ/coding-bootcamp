const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(numOfDays(data))
});

var days;
function numOfDays(data){
var month = parseInt(data);
var C1 = [1,3,5,7,8,10,12]
var C2 = [4,6,9,11]
var C3 = [2]

if(month<1 | month>12){
  return "Error"
}

else{
  if(C1.includes(month)) {
    days = 31;
    return days;
  }

  else if(C2.includes(month)){
    days =30;
    return days;
  }
  else if(C3.includes(month)) {
    days =28;
    return days;
  }

}

}
