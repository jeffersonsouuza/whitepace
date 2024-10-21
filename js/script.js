import "./../css/style.css";
import SimpleAnime from "./modules/SimpleAnime.js";
import SmoothScroll from "./modules/SmoothScroll.js";

import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Navbar Mobile
window.toggleNavMobile = () => {
  const navMobile = document.getElementById("navMobile");
  navMobile.style.display === "block"
    ? (navMobile.style.display = "none")
    : (navMobile.style.display = "block");
};

// Simple Anime Elements
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Smooth Scroll
const smoothScroll = new SmoothScroll(".nav", 0, 2000);
smoothScroll.init();

// Slider Testimonials
new Swiper(".mySliderTestimonials", {
  modules: [Pagination],
  spaceBetween: 32,
  freeMode: true,
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2,
    },
    1152: {
      slidesPerView: 3,
    },
  },
});
