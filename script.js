/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleDropdownMenu() {
  let x = document.getElementById("menuDropdown");
  if (x.style.display === "" || x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

document.body.addEventListener("click", function (event) {
  let x = document.getElementById("menuDropdown");
  let button = document.getElementsByClassName("menu-button")[0]; // button untuk toggle menuDropDown
  if (x.style.display === "flex" && !x.contains(event.target) && !button.contains(event.target)) {
    x.style.display = "";
  }
});


function toggleHamburgerMenu() {
  let icons = document.querySelectorAll('.icon');
  let x = document.getElementsByClassName("hamburger-menu-lists")[0];
  if (x.style.display === "" || x.style.display === "none") {
    x.style.display = "flex";
    console.log('yes');
  } else {
    x.style.display = "none";
    console.log('no');
  }

  icons.forEach (icon => {  
    icon.classList.toggle("open");
  })

  }

  
