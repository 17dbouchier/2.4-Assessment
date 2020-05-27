$("#main").load(location.href + " #showcase");

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
document.getElementById("sidenav-links").style.opacity= "0";

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("sidenav-links").style.opacity = "100%";
  }
  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenav-links").style.opacity= "0";
  }
});
