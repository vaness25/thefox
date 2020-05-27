function navbarDropdown() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("navbar-parent");
    if (x.className === "topnav") {
      x.className += " responsive";
      y.className += " navbar-responsive"
    } else {
      x.className = "topnav";
      y.className = "padding-right navbar-parent";
    }
  }