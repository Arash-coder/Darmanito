const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.lists');
    const navlinks = document.querySelectorAll('.lists li');


    burger.addEventListener('click', () => {
        header.classList.toggle('header-animate');
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