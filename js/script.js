import "./../css/style.css";
import SimpleAnime from "./modules/SimpleAnime.js";
import SmoothScroll from "./modules/SmoothScroll.js";
import checkValidity from "./modules/validation.js";

// import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Validate Login
window.checkValidity = checkValidity;
const loginForm = document.querySelector(".login-submit");
if (loginForm) {
  loginForm.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.assign("index.html");
  });
}

// Navbar Mobile
window.toggleNavMobile = () => {
  const navMobile = document.getElementById("navMobile");
  navMobile.style.display =
    navMobile.style.display === "block" ? "none" : "block";
};

// Simple Anime Elements
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Smooth Scroll
const smoothScroll = new SmoothScroll(".nav", 0, 2000);
smoothScroll.init();

// Slider Testimonials
const testimonialSlider = document.querySelector(".mySliderTestimonials");
if (testimonialSlider) {
  import("swiper").then(({ default: Swiper }) => {
    new Swiper(".mySliderTestimonials", {
      modules: [Pagination],
      spaceBetween: 32,
      freeMode: true,
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2 },
        1152: { slidesPerView: 3 },
      },
    });
  });
}

// Slider Plans
const planSlider = document.querySelector(".mySliderPlans");
if (planSlider) {
  import("swiper").then(({ default: Swiper }) => {
    const swiperPlans = new Swiper(".mySliderPlans", {
      modules: [Pagination],
      freeMode: true,
      slidesPerView: 3,
      spaceBetween: 32,
      centeredSlides: true,
      pagination: {
        el: ".slider-pagination-plans",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 1, initialSlide: 1 },
        768: { slidesPerView: 1.75, initialSlide: 1 },
        1152: {
          slidesPerView: 3,
          spaceBetween: 32,
          centeredSlides: false,
          pagination: {
            el: ".slider-pagination-plans",
            clickable: true,
            enabled: false,
          },
          allowTouchMove: false,
          navigation: false,
          freeMode: false,
        },
      },
    });
    window.addEventListener("resize", () => swiperPlans.update());
  });
}
