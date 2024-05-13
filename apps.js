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

// countdown
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24,
          munDay = "May 24, 2024 17:00:00"; // change date & time later
    
    const countDown = new Date(munDay).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());


//     const navbar = document.querySelector('.navbar');
// window.onscroll = () => {
//     if (window.scrollY > 300) {
//         navbar.classList.add('nav-active');
//     } else {
//         navbar.classList.remove('nav-active');
//     }
// };