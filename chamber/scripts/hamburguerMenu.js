/**
 * Hamburger Menu
 */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.querySelectorAll('.item')
          .forEach((function(x){ x.setAttribute("style","display:none");}));
    } else {
      x.className = "topnav";
      document.querySelectorAll('.item')
          .forEach((function(x){ x.setAttribute("style","display:block");}));
    }
  }
