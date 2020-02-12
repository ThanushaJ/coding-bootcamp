

var division = document.createElement("div");
division.style.width = "200px";
division.style.height = "200px";
division.style.background = "yellow";
division.style.color = "red";
division.id ="divisionOne";
division.innerHTML +="I am div1";


var division2 = document.createElement("div");
division2.style.width = "200px";
division2.style.height = "200px";
division2.style.background = "red";
division2.style.color = "black";
division2.id ="divisionTwo";
division2.innerHTML +="I am div2";

var button1 = document.createElement("input");
button1.setAttribute('type','button');
button1.setAttribute('value','Click Me');
button1.onclick = function(){
  var First = document.getElementById('divisionTwo').innerHTML;
  var Second = document.getElementById('divisionOne').innerHTML;
  document.getElementById('divisionOne').innerHTML = First;
  document.getElementById('divisionTwo').innerHTML = Second;
};



document.body.appendChild(division);
document.body.appendChild(division2);
document.body.appendChild(button1);
