import "./../css/style.css";

window.toggleNavMobile = () => {
  const navMobile = document.getElementById("navMobile");
  navMobile.style.display === "block"
    ? (navMobile.style.display = "none")
    : (navMobile.style.display = "block");
};
