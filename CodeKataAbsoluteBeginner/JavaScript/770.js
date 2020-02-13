
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(evenOdd(data))
});

function evenOdd(data){
  var N = parseInt(data);
  var result;
  if(N==0){
    result = "Zero";
    return result;
  }
  else if(N>0){
    if(N%2==0){
      result = "Even";
      return result;
    }
    else {
      result = "Odd";
      return result;
    }
  }
}
