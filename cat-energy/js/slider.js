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

    var onMobileSize = window.matchMedia('(max-width: 699px)');
    function handleMobileSize(e) {
        if (e.matches) {
            input.step = 100;
            input.value = 0;
            slider.style.gridTemplateColumns = "1fr 100%";
        }
    }
    onMobileSize.addListener(handleMobileSize);
    handleMobileSize(onMobileSize);

    var onTabletSize = window.matchMedia('(min-width: 700px)');
    function handleTabletSize(e) {
        if (e.matches) {
            input.step = 1;
            input.value = 50;
            slider.style.gridTemplateColumns = "1fr 50%";
        }
    }
    onTabletSize.addListener(handleTabletSize);
    handleTabletChange(onTabletSize);
});