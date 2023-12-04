window.onscroll = () => {
  const nav = document.querySelector('#fixed');
  if (this.scrollY <= 100) {
    nav.className = '';
  } else {
    nav.className = 'scroll';
  }
};

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  this.classList.toggle("clear");
  this.querySelector(".fa-angle-down").classList.toggle("active"); // doesn't workx

  /* Toggle between hiding and showing the active panel */
  var panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }

  if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
});
}

// Mobile
const 
    menu = document.querySelector("#mobile-menu"),
    menuLinks = document.querySelector(".links"),
    menuTop = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    menuTop.classList.toggle("active");
})
