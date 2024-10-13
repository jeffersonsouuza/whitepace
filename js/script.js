import "./../css/style.css";
import SimpleAnime from "./modules/SimpleAnime.js";

window.toggleNavMobile = () => {
  const navMobile = document.getElementById("navMobile");
  navMobile.style.display === "block"
    ? (navMobile.style.display = "none")
    : (navMobile.style.display = "block");
};

if (window.SimpleAnime) {
  new SimpleAnime();
}
