let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

let btn = document.getElementById("btn");
let btnn = document.getElementById("btnn");
let down = document.getElementById("down");
window.onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = "block";
    btnn.style.display = "block";
  } else {
    btn.style.display = "none";
    btnn.style.display = "none";
  }
};

btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
down.onclick = function () {
  scroll({
    top: 700,
    behavior: "smooth",
  });
};
// navbar-responsive 
let btnopen = document.getElementById("open");
let btnClose = document.getElementById("close");
let navbar = document.querySelector(".navbar-responsive");

btnClose.onclick = function () {
  navbar.classList.add("hid");
  this.classList.add("hid");
  btnopen.classList.remove("hid");
};
btnopen.onclick = function () {
  this.classList.add("hid");
  btnClose.classList.remove("hid");
  navbar.classList.remove("hid");
};

const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".title", { delay: 200, origin: "top" });
sr.reveal(".img ,.imgTwo, .boxSkills, .projects, .formContainer", {
  delay: 400,
  origin: "top",
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


