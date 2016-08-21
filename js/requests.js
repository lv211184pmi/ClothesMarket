// REGISTRATION 

function checkCookies() {
  var requestLogin = new XMLHttpRequest();
  requestLogin.onreadystatechange = function(){
    if (requestLogin.readyState == 4 && requestLogin.status == 200) {
      parsingLoginJSON(requestLogin.responseText)
    }
  }
  requestLogin.open('GET', 'login.json', true);
  requestLogin.send();
}
function parsingLoginJSON(response) {
  var loginUser = document.getElementById('loginUser').value;
  var passwordUser = document.getElementById('passwordUser').value;
  var userData = JSON.parse(response);
  if (loginUser == userData.username &&  passwordUser == userData.password){
    document.getElementsByClassName('TopMenu1LinksRegistered').style.visibility = "visible";
    document.getElementsByClassName('TopMenu1LinksUnregistered').style.visibility = "hidden";
  } else {
    loginUser.innerHTML = "enter valid login";
  }
}

// MAIN CONTENT REQUEST
var requestContent = new XMLHttpRequest();
requestContent.onreadystatechange = function(){
  if (requestContent.readyState == 4 && requestTable.status == 200){
    parsingContentJSON(requestContent.responseText);
  }
}
requestContent.open('GET', 'content.json', true);
requestContent.send();
function parsingContentJSON(response) {
  var i;
  var contentArray = JSON.parse(response);
  for (i = 0; i < contentArray.length; i++) {
    var out_content = "<div class='col-xs-6 col-md-3'><a href='#' class='cotentItem1 thumbnail'><img src='";
    out_content += contentArray.images_array.path[i] + "'></a></div>";
  }
  document.getElementById('contentRow').innerHTML = out_content;
}

//  TABLE SIZE REQUEST
var requestTable = new XMLHttpRequest();
requestTable.onreadystatechange = function(){
  if (requestTable.readyState == 4 && requestTable.status == 200){
    parsingTableJSON(requestTable.responseText);
  } 
}
requestTable.open('GET', 'size_table.json', true);
requestTable.send();
function parsingTableJSON(response) {
  var sizeTable = JSON.parse(response);
  var i;
  var out = "<table>"
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