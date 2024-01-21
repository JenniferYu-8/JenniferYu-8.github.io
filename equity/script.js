window.onscroll = () => {
  const nav = document.querySelector('#fixed');
  if (this.scrollY <= 100) {
    nav.className = '';
  } else {
    nav.className = 'scroll';
  }
};

const 
    menu = document.querySelector("#mobile-menu"),
    menuLinks = document.querySelector(".links"),
    menuTop = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    menuTop.classList.toggle("active");
})
