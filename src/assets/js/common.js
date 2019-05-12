function setActive(id, iconId) {
  console.log(id);
  console.log(iconId)
  var nodes = document.getElementsByClassName('menuButton');
  var icons = document.getElementsByClassName('stateIcon')
  for (var i = 0; i < 6; i++) {
    nodes[i].className = nodes[i].className.replace(" active", "");
    if (icons[i].id == iconId) { icons[i].className = icons[i].className.replace(" hide", " show"); }
    else {
      icons[i].className = icons[i].className.replace(" show", " hide");
    }

  }



  document.getElementById(id).className += " active";
  console.log("loadedddd")

}
function resolveCollapse(id) {
  var delayInMilliseconds = 600; 

  setTimeout(function() {
    document.getElementById(id).scrollIntoView();
  }, delayInMilliseconds);
 
}