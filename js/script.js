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
    // paragraph.innerHTML = "در فروشگاه آنلاین میتوانید دارو های موجود را مشاهده کنید و در صورت نیاز با توجه به نسخه آن هارا سفارش دهید ";
    // step1.innerHTML = "جای متن";
    // step2.innerHTML = "جای متن";
    // step3.innerHTML = "جای متن";
    actived.className = "btn-grid-possibilities disable";
    disable1.className = "btn-grid-possibilities disable";
    disable2.className = "btn-grid-possibilities disable";
})
disable1.addEventListener("click", function() {
    disable1.className = "btn-grid-possibilities";
    title.innerHTML = "ویزیت آنلاین";
    // paragraph.innerHTML = "میتونید به صورت آنلاین ویزیت بشید ";
    // step1.innerHTML = "جای متن";
    // step2.innerHTML = "جای متن";
    // step3.innerHTML = "جای متن";
    actived.className = "btn-grid-possibilities disable";
    disable2.className = "btn-grid-possibilities disable";
    disable.className = "btn-grid-possibilities disable";
})
disable2.addEventListener("click", function() {
    disable2.className = "btn-grid-possibilities";
    title.innerHTML = "نوبت دهی آنلاین";
    // paragraph.innerHTML = "بدون وقته نوبت بگیرید";
    // step1.innerHTML = "جای متن";
    // step2.innerHTML = "جای متن";
    // step3.innerHTML = "جای متن";
    disable1.className = "btn-grid-possibilities disable";
    disable.className = "btn-grid-possibilities disable";
    actived.className = "btn-grid-possibilities disable";
})
actived.addEventListener("click", function() {
    actived.className = "btn-grid-possibilities";
    title.innerHTML = "داروخانه آنلاین";
    // paragraph.innerHTML = "در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید";
    step1.innerHTML = "وارد بخش سفارش با عکس نسخه شوید عکس و اوضیحات را وارد کنید";
    step2.innerHTML = "بعد از ارسال عکس نسخه،باید آدرس محل خودتون رو وارد کنید";
    step3.innerHTML = "اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید";
    disable.className = "btn-grid-possibilities disable";
    disable1.className = "btn-grid-possibilities disable";
    disable2.className = "btn-grid-possibilities disable";
})


// function arash() {
//     var x = document.getElementById("number").value;
//     if (x < 11 && isNaN(x) && x > 11) {
//         document.getElementById("error").innerHTML = "wrong";
//     }
// }
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