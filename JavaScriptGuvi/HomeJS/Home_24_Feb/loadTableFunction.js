//function to load table

function loadTable(data){
  var cols =[];
  for(var i=0;i<data.length;i++){
    for(var k in data[i]){
      if(cols.indexOf(k)===-1){
        //pushing all keys to columns
        cols.push(k);
      }
    }
  }
}

//create a table element
var table = document.createElement("table");

//create a table row
var tr = table.insertRow(-1);

for(var i=0;i<cols.length;i++){

  //create the table header
  var theader = document.createElement("th");
  theader.innerHTML=cols[i];

  //append Column name to the table row
  tr.appendChild(theader);
}

//adding the data to the table

for(var i=0;i<data.length;i++){

  //create a new insertRow
  trow = table.insertRow(-1);
  for(var j=0;j<data.length;j++){
    var cell = trow.insertCell(-1);

    //inserting a cell at particular place

    cell.innerHTML = data[i][cols[j]];
  }
}
