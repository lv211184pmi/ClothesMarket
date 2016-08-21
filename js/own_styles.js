//REGISTRATION PART WITH COOKIES

//TABLE SIZE LOADING & PARSING


// make top carousele play styles
//output elements style---------
var current_page = 1;
var records_per_page = 8;

document.getElementsByClassName("popularContent").onload = function() {myFunction()};

function prevPage(){
  if (current_page > 1) {
      current_page--;
      changePage(current_page);
  }
}

function nextPage(){
  if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
  }
}

function changePage(page){
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("output_values");
  var page_span = document.getElementById("page");


    // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (var i = (page-1) * records_per_page; i < (page * records_per_page)
                && i < arr_main.length; i++){
    var out_item = document.createElement('div');
    out_item.setAttribute('class', 'output_item');
    out_item.setAttribute('id', "out_item"+count);
    document.getElementById('output_values').appendChild(out_item);
    var out_picture = document.createElement('div');
    out_picture.setAttribute('id', "out_picture");
    document.getElementById("out_item"+count).appendChild(out_picture);
    out_picture.innerHTML = arr_main[i][0];
    var out_price = document.createElement('div');
    document.getElementById("out_item"+count).appendChild(out_price);
    out_price.innerHTML = arr_main[i][1];
    var out_name = document.createElement('div');
    document.getElementById("out_item"+count).appendChild(out_name);
    out_name.innerHTML = arr_main[i][2];
    var edit_button = document.createElement('button');
    document.getElementById("out_item"+count).appendChild(edit_button);
    edit_button.setAttribute('onclick', 'editOutItem()');
    edit_button.setAttribute('class', 'editButton');
    edit_button.setAttribute('id', i);
    var delete_button = document.createElement('button');
    document.getElementById("out_item"+count).appendChild(delete_button);
    delete_button.setAttribute('onclick', 'deleteOutItem()');
    count++;
  }

  page_span.innerHTML = page;

  if (page == 1) {
      btn_prev.style.visibility = "hidden";
  } else {
      btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
      btn_next.style.visibility = "hidden";
  } else {
      btn_next.style.visibility = "visible";
  }
}

function numPages(){
  return Math.ceil(arr_main.length / records_per_page);
}