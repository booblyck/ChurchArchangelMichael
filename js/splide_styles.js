/*document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        autoplay: true,
        interval: 5000,
        type: "loop",
    }).mount();
});*/

document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type: "loop",
        perPage: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: true,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    }).mount();
});
