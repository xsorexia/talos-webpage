var mobileNavbar = "/web/modules/mobileNavbar.html";
var mobileFooter = "/web/modules/mobileFooter.html";
$("#navbar-mobile").load(mobileNavbar);
$("#footer-mobile").load(mobileFooter);


function openNav() {
    document.getElementById("mobileNav").style.width = "100vw";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementById("mobile-div").style.overflowY = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mobileNav").style.width = "0";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    document.getElementById("mobile-div").style.overflowY = "auto";
  }