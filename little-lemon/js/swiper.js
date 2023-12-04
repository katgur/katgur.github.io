document.addEventListener("DOMContentLoaded", function (event) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + ' testimonials__bullet"></span>';
            },
        },
        breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }
    });
});