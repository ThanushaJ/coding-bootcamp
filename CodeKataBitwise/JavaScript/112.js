const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(arrayOr(userInput));
});

function arrayOr(userInput){
    var arrayOr = 0;
    var arrayNum = userInput[1].split(' ');
    for(var i=0;i<=userInput[0];i++){
        arrayOr = arrayOr | arrayNum[i];
    }
    return arrayOr
}
