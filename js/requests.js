// REGISTRATION 
function checkCookies() {
  var requestLogin = new XMLHttpRequest();
  requestLogin.onreadystatechange = function() {
    if (requestLogin.readyState == 4 && requestLogin.status == 200) {
       parsingLoginJSON(requestLogin.responseText);
    }
  };
  requestLogin.open("GET", "js/login.json", true);
  requestLogin.send();
}
function parsingLoginJSON(response) {
  var loginUser = document.getElementById('loginUser').value;
  var passwordUser = document.getElementById('passwordUser').value;
  var userData = JSON.parse(response);
  if (loginUser == userData.username &&  passwordUser == userData.password){
    document.getElementById('TopMenu1LinksRegistered').style.display = "flex";
    document.getElementById('TopMenu1LinksUnregistered').style.display = "none";
    document.cookie = "username: admin; userpassword: admin";
  } else {
    document.getElementById('loginUser').placeholder.innerHTML = 'no valid user';
  }
}

// MAIN CONTENT REQUEST
var requestContent = new XMLHttpRequest();
requestContent.onreadystatechange = function(){
  if (requestContent.readyState == 4 && requestTable.status == 200){
    parsingContentJSON(requestContent.responseText);
  }
}
requestContent.open('GET', 'js/content.json', true);
requestContent.send();
function parsingContentJSON(response) {
  var contentArray = JSON.parse(response);
  var i;
  for (i=0; i < contentArray.length; i++) {
    var aAttribute = "<a href='#' class='cotentItem1 thumbnail'>";
    aAttribute += "<img src='" + contentArray[i].path + "' class='contentImage1'>";
  }
  document.getElementById('imgContent').innerHTML = aAttribute;
}

//  TABLE SIZE REQUEST
var requestTable = new XMLHttpRequest();
requestTable.onreadystatechange = function(){
  if (requestTable.readyState == 4 && requestTable.status == 200){
    parsingTableJSON(requestTable.responseText);
  } 
}
requestTable.open('GET', 'js/size_table.json', true);
requestTable.send();
function parsingTableJSON(response) {
  var sizeTable = JSON.parse(response);
  var i, j;
  var out = "<table class='tableSize'>"
  for (i = 0; i < sizeTable.length; i++) {
    out += "<tr><td>" + sizeTable[i].country;
    var y = sizeTable[i].size;
    for (j = 0; j < 11; j++) {
      out += "</td><td>" +  y[j] + "</td>";
    }
    out += "</tr>";
  } 
  out += "</table>";
  document.getElementById("sizeTableContent").innerHTML = out;
}