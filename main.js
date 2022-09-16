// mebuat animasi scroll
window.addEventListener("scroll",function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY > 0);
});

// membuat Humberger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

//close nav
navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
});
