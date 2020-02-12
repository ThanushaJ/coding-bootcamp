var division = document.createElement("div");
division.style.width = "200px";
division.style.height = "200px";
division.style.background = "yellow";
division.style.color = "red";
division.style.innerHTML += "My Div which changes color on Mouse Over"
division.addEventListener('mouseover', function() {
  division.style.background = "green"
});
division.addEventListener('mouseleave', function() {
  division.style.background = "yellow"
});
document.body.appendChild(division);
