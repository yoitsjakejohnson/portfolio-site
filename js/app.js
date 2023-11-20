const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("is-active");
    links.classList.toggle("show-links");
});

// set date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

// add box shadow to nav on scroll
const navbar = document.getElementById("navbar");

window.onscroll = function () {
    if (window.scrollY > 22) {
        navbar.classList.add("shadow-nav");
    } else {
        navbar.classList.remove("shadow-nav");
    }
};

// const lightbox = GLightbox({
//     touchNavigation: true,
//     loop: true,
//     autoplayVideos: true
// });