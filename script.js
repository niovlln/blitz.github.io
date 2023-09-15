/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownMenu() {
    document.getElementById("dropdown-menu-content").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.menu-button')) {
    var Dropdown = document.getElementById("dropdown-menu-content");
      if (Dropdown.classList.contains('show')) {
        Dropdown.classList.remove('show');
      }
    }
  }