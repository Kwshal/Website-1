

var burgerMenuBtn = document.getElementById("burger-menu-btn");
var burgerMenu = document.getElementById("burger-menu");


document.addEventListener("click", (e) => {
     if (!burgerMenu.contains(e.target) && !burgerMenuBtn.contains(e.target)) {
          Object.assign(burgerMenu.style, {
               left: "-100%",
          });
     }
})
burgerMenuBtn.addEventListener("click", () => {
     if (burgerMenu.style.left === "-100%") {
          Object.assign(burgerMenu.style, {
               left: "0%",
          });
     } else {
          Object.assign(burgerMenu.style, {
               left: "-100%",
          });
     }
})
