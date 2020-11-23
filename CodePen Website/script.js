window.onscroll = function () {
  myFunction();
};

var nav_link = document.getElementById("scroll");
var sticky = nav_link.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav_link.classList.add("sticky");
  } else {
    nav_link.classList.remove("sticky");
  }
}