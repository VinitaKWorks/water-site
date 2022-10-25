

var menuDisplay = document.getElementById("menu-display");


function noScroll() {
  window.scrollTo(0,0);
}

function clickMenu() {
  menuDisplay.style.display = "block";
  menuDisplay.style.zIndex = "1";
  window.addEventListener("scroll", noScroll);
  document.querySelector("body").classList.add("hide-overflow");
}

function leaveMenu() {
  menuDisplay.style.display = "none";
  window.removeEventListener("scroll", noScroll);
  document.querySelector("body").classList.remove("hide-overflow");
}