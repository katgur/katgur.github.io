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
    
    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animation__scale-in");
            } else {
                entry.target.classList.remove("animation__scale-in");
            }
        });
    };

    const animated = document.getElementsByClassName('animation');
    Array.prototype.forEach.call(animated, el => {
        const Obs = new IntersectionObserver(inViewport);
        const obsOptions = {};

        Obs.observe(el, obsOptions);
    })
});