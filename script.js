var x = 0
function hamburgerClick() {
  if (x==0) {
    document.getElementById("topnav").style.display = "grid"
    document.getElementById("topnav").style.textAlign = "center"
    x = 1
  }
  else {
    document.getElementById("topnav").style.display = "none"
    x = 0
  }
}



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}