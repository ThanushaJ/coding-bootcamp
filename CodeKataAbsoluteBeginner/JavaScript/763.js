const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(sum(userInput));
});

var C = 0;
function sum(data){
for(var i=0;i<data.length;i++){
  C+=parseInt(data[i]);
}
//C = C.toFixed(1);
return C;
}
