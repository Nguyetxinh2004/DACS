const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    var navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
})