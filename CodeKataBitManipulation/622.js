const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(positionToOne(data));
});


function positionToOne(data){
    var nums = data.split(' ');
    var bin = parseInt(nums[0]).toString(2);
    var digits = (""+bin).split("");
    digits[nums[1]] =1;
    digits[nums[2]] =1;
    var number = digits.join('');
    var final = parseInt(number.toString(),2)
    return final;

}
