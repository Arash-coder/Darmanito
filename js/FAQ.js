const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lists');
    const navlinks = document.querySelectorAll('.lists li');


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.3}s`;

            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();

const txt = document.querySelector(".txt");
const hori = document.querySelector(".horizontal");
const desc = document.querySelector(".txt__desc");

txt.addEventListener("click", () => {
    hori.classList.toggle("onclick");
    desc.classList.toggle("active");
})

const txt2 = document.getElementById("t2");
const hori2 = document.getElementById("h2");
const desc2 = document.getElementById("t-d2");

txt2.addEventListener("click", () => {
    hori2.classList.toggle("onclick");
    desc2.classList.toggle("active");
})

const txt3 = document.getElementById("t3");
const hori3 = document.getElementById("h3");
const desc3 = document.getElementById("t-d3");

txt3.addEventListener("click", () => {
    hori3.classList.toggle("onclick");
    desc3.classList.toggle("active");
})

const txt4 = document.getElementById("t4");
const hori4 = document.getElementById("h4");
const desc4 = document.getElementById("t-d4");

txt4.addEventListener("click", () => {
    hori4.classList.toggle("onclick");
    desc4.classList.toggle("active");
})