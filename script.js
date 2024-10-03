

var burgerMenuBtn = document.getElementById("burger-menu-btn");
var burgerMenu = document.getElementById("burger-menu");

document.addEventListener("click", (e) => {
     if (!burgerMenu.contains(e.target) && !burgerMenuBtn.contains(e.target)) {
          burgerMenu.style.display = "none";
     }
})

burgerMenuBtn.addEventListener("click", () => {
     Object.assign(burgerMenu.style, {
          display: "flex",
          transition: "height 0.9s ease, width 0.9s ease",
          maxWidth: "clamp(300px, 40vw, 350px)",
     });
})

