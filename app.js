const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("mySidenav").style.width = "20%";
  }
  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById("mySidenav").style.width = "0";
  }
});
