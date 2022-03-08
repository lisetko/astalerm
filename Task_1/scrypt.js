'use strict';

const goTopBtn = document.querySelector('.up-button');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', goTop);

function trackScroll() {
    const scrolled = window.pageYOffset;
    const place = 100;

    if (scrolled > place) {
        goTopBtn.classList.add('up-button_on');
    }
    if (scrolled < place) {
        goTopBtn.classList.remove('up-button_on');
    }
}

function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(goTop, 0);
    }
}
