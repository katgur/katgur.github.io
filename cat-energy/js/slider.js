document.addEventListener("DOMContentLoaded", function (event) {
    var slider = document.getElementsByClassName('before-after__picture')[0];
    var input = document.getElementsByClassName('before-after__slider-input')[0];
    var beforeButton = document.getElementsByClassName('before-after__text_type_toggle--before')[0];
    var afterButton = document.getElementsByClassName('before-after__text_type_toggle--after')[0];
    input.addEventListener("input", (e => {
        slider.style.gridTemplateColumns = "1fr " + (100 - e.target.value) + "%"
    }));
    beforeButton.addEventListener("click", () => {
        input.value = 0;
        slider.style.gridTemplateColumns = "1fr 100%"
    })
    afterButton.addEventListener("click", () => {
        input.value = 100;
        slider.style.gridTemplateColumns = "1fr 0%"
    })
});