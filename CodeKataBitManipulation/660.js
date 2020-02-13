const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(bin(data).join(' '));
});


function bin(data){
    var list = [];
    var d = parseInt(data);
    for(var i =1;i<=d;i++){
      var b = i.toString(2);
      list.push(b);
    }
    return list;

}
