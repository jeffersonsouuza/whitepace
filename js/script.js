import "./../css/style.css";
import SimpleAnime from "./modules/SimpleAnime.js";
import SmoothScroll from "./modules/SmoothScroll.js";

window.toggleNavMobile = () => {
  const navMobile = document.getElementById("navMobile");
  navMobile.style.display === "block"
    ? (navMobile.style.display = "none")
    : (navMobile.style.display = "block");
};

if (window.SimpleAnime) {
  new SimpleAnime();
}

const smoothScroll = new SmoothScroll(".nav", 0, 2000);
smoothScroll.init();
