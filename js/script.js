var actived = document.querySelector(".actived");
var disable = document.querySelectorAll(".disable")[0];
var disable1 = document.querySelectorAll(".disable")[1];
var disable2 = document.querySelectorAll(".disable")[2];
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var title = document.getElementById("title");
var paragraph = document.getElementById("ex-text");
disable.addEventListener("click", function() {
    disable.className = "btn-grid-possibilities";
    title.innerHTML = "فروشگاه آنلاین";
    actived.className = "btn-grid-possibilities disable";
    disable1.className = "btn-grid-possibilities disable";
    disable2.className = "btn-grid-possibilities disable";
})
disable1.addEventListener("click", function() {
    disable1.className = "btn-grid-possibilities";
    title.innerHTML = "ویزیت آنلاین";
    actived.className = "btn-grid-possibilities disable";
    disable2.className = "btn-grid-possibilities disable";
    disable.className = "btn-grid-possibilities disable";
})
disable2.addEventListener("click", function() {
    disable2.className = "btn-grid-possibilities";
    title.innerHTML = "نوبت دهی آنلاین";
    disable1.className = "btn-grid-possibilities disable";
    disable.className = "btn-grid-possibilities disable";
    actived.className = "btn-grid-possibilities disable";
})
actived.addEventListener("click", function() {
    actived.className = "btn-grid-possibilities";
    title.innerHTML = "داروخانه آنلاین";
    step1.innerHTML = "وارد بخش سفارش با عکس نسخه شوید عکس و اوضیحات را وارد کنید";
    step2.innerHTML = "بعد از ارسال عکس نسخه،باید آدرس محل خودتون رو وارد کنید";
    step3.innerHTML = "اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید";
    disable.className = "btn-grid-possibilities disable";
    disable1.className = "btn-grid-possibilities disable";
    disable2.className = "btn-grid-possibilities disable";
})



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

const downloadsection = () => {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const error = document.getElementById('error');
    button.addEventListener("click", () => {
        if (input.value.length > 11) {
            error.style.display = 'block';
        } else if (input.value.length < 11) {
            error.style.display = 'block';

        } else {
            error.style.display = 'none';

        }
    });
    input.addEventListener("keypress", (event) => {
        if (input.value.length > 11 && event.which === 13) {
            error.style.display = 'block';
        } else if (input.value.length < 11 && event.which === 13) {
            error.style.display = 'block';

        } else {
            error.style.display = 'none';

        }
    });



}
downloadsection();
const downloadsection2 = () => {
    const input2 = document.getElementById('input2');
    const button2 = document.getElementById('button2');
    const error2 = document.getElementById('error2');
    button2.addEventListener("click", () => {
        if (input2.value.length > 11) {
            error2.style.display = 'block';
        } else if (input2.value.length < 11) {
            error2.style.display = 'block';

        } else {
            error2.style.display = 'none';

        }
    });
    input2.addEventListener("keypress", (event2) => {
        if (input2.value.length > 11 && event2.which === 13) {
            error2.style.display = 'block';
        } else if (input2.value.length < 11 && event2.which === 13) {
            error2.style.display = 'block';

        } else {
            error2.style.display = 'none';

        }
    });



}
downloadsection2();