function validateForm(){
  event.preventDefault();
  var element = document.forms['shorten_it_form']['shorten_it'];
  var alert = document.getElementById('alert');
  var btn  = document.getElementById('shorten_btn');
  if(element.value == ''){
    alert.style.display = "block";
    alert.innerHTML = "<i>Please add a link</i>";
    alert.style.color = "hsl(0, 87%, 67%)";
    element.style.border="hsl(0, 87%, 67%) 2px solid";
    element.style.color="hsl(0, 87%, 67%)";
    // btn.disabled = true;
  }
}

function change_color(){
  // change the color when the user is typing
  var element = document.forms['shorten_it_form']['shorten_it'];
  var alert = document.getElementById('alert');
  var btn  = document.getElementById('shorten_btn');
  alert.style.display = "none";
  element.style.border="none";
  element.style.color="black";

  // if(element.value.length > 0 ){
  //   btn.disabled = false;
  // }
}
