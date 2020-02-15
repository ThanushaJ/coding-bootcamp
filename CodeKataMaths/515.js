const readline = require('readline');
const inputValue = readline.createInterface({input:process.stdin});
inputValue.on("line",(data)=>{console.log(printSeries(data).join(' '))});
function printSeries(data){
  var number = parseInt(data);
  var sum =0;
  var series =[];
  for(var i=1;i<=number;i++){
    sum +=i**3;
    series.push(sum);
  }
  return series;
}
