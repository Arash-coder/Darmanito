const input1 = document.getElementById("f1");
const input2 = document.getElementById("f2");
const button = document.getElementById("btnf");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");

button.addEventListener("click", () => {
    if (!isNaN(input1.value)) {
        error1.innerHTML = "لطفا عدد وارد نکنید";
        input1.style.border = "1px solid red";

    }
    if (!input2.value.includes("@")) {
        error2.innerHTML = "ایمیل وارد شده معتبر نیست";
        input2.style.border = "1px solid red";

    }
})