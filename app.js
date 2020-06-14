const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
document.getElementById("sidenav-links").style.opacity= "0";
document.getElementById("aiHeader").style.opacity= "100%";

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("sidenav-links").style.opacity = "100%";
    if (x.matches) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("aiHeader").style.opacity = "0";
    } else {
      document.getElementById("mySidenav").style.width = "20%";
      document.getElementById("aiHeader").style.opacity= "100%";
    }
  }
  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenav-links").style.opacity= "0";
    document.getElementById("aiHeader").style.opacity= "100%";
  }
});

window.addEventListener('resize', () => {
  if(!menuOpen) {

  } else {
    if (x.matches) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("aiHeader").style.opacity = "0";
    } else {
      document.getElementById("mySidenav").style.width = "20%";
      document.getElementById("aiHeader").style.opacity= "100%";
    }
  }
});

// Makes columns in HTML clickable links
$(document).ready(function () {
  $(document.body).on("click", "div[data-href]", function () {
    window.location.href = this.dataset.href;
  });
});

var x = window.matchMedia("(max-width: 1055px)")
mobileDeviceFunction(x) // Call listener function at run time
x.addListener(mobileDeviceFunction) // Attach listener function on state changes
