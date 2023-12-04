document.addEventListener('readystatechange', event => {
    if (document.readyState == "complete") {
        var nav = document.getElementsByClassName('header__nav')[0];
        var close = document.getElementsByClassName('header__close')[0];
        var menu = document.getElementsByClassName('header__menu')[0];

        close.addEventListener('click', function () {
            nav.classList.add('header__none');
            close.classList.add('header__none');
            menu.classList.remove('header__none');
        })
        menu.addEventListener('click', function () {
            nav.classList.remove('header__none');
            close.classList.remove('header__none');
            menu.classList.add('header__none');
        })

        function onMedia(query) {
            if (query.matches) {
                nav.classList.remove('header__none');
                close.classList.add('header__none');
                menu.classList.add('header__none');
            } else {
                nav.classList.add('header__none');
                close.classList.add('header__none');
                menu.classList.remove('header__none');
            }
        }

        var x = window.matchMedia("(min-width: 768px)")
        onMedia(x);
        x.addEventListener("change", function () {
            onMedia(x);
        });
    }
});