const input = document.getElementById('inputnum');
const button = document.getElementById('tbnsub');
const error = document.getElementById('error');

input.addEventListener("keypress", () => {
    if (isNaN(input.value)) {
        error.innerHTML = "لطفا شماره وارد کنید";
    } else if (input.value.length > 11 || input.value.length < 11) {
        error.innerHTML = "رقم شماره وارد شده استاندارد نمی باشد";
    } else {
        error.innerHTML = "";

    }
});
button.addEventListener("click", () => {
    if (input.value.length > 11 || input.value.length < 11) {
        error.innerHTML = "رقم شماره وارد شده استاندارد نمی باشد";
    }

})