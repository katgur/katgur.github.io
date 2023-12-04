document.addEventListener("DOMContentLoaded", function (event) {
    var text = document.getElementsByClassName('about__bg-text');
    document.addEventListener('scroll', function (e) {
        var current = window.scrollY;
        text[1].style = `transform: translate3d(${current / 10}px, 0px, 0px)`;
        text[0].style = `transform: translate3d(${-1 * current / 10}px, 0px, 0px)`;
    })
    var chevron = document.getElementsByClassName('hero__chevron-area')[0];
    chevron.addEventListener('click', function () {
        window.scroll({
            top: window.screen.height - 100,
            behavior: "smooth",
        });
    })
});