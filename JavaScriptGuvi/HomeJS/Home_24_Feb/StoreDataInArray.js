//function to get form data and store in array of objects
var data = [];

var setData = (ev) => {
  ev.preventDefault();
  var checkboxData = document.getElementsByName("favplace");
  console.log(checkboxData);
  var favplaceArray = [];
  for (var i = 0; i < checkboxData.length; i++) {

    if (checkboxData[i].checked) {
      favplaceArray.push(checkboxData[i].value);
    }
    console.log(favplaceArray);
  }
  var genderData = document.getElementsByName("gender");
  for (var i = 0; i < genderData.length; i++) {
    if (genderData[i].checked) {
      var genderD = genderData[i].value;
    }
  }
  var maritalData = document.getElementsByName("marital");
  for (var i = 0; i < maritalData.length; i++) {
    if (maritalData[i].checked) {
      var maritalD = maritalData[i].value;
    }
  }
  var dataObject = {
    name: document.getElementById("uName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    country: document.getElementById("country").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    gender: genderD,
    maritalStatus: maritalD,
    favouritePlaces: favplaceArray
  }
  data.push(dataObject);

  loadTable(data);
  document.forms[0].reset();
  console.log(data);

} //end of function setData
