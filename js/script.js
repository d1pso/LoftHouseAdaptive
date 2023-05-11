// SCROLL to the testimonialsSection
const mouseBtn = document.querySelector('.content-intro__icon');
const testimonialsSection = document.querySelector('.testimonials')

mouseBtn.addEventListener('click', function() {
    testimonialsSection.scrollIntoView({behavior: "smooth"})
})

// BURGER 

const burgerIcon = document.querySelector('.menu__burger');
const burgerMenu = document.querySelector('.header__nav')

burgerIcon.addEventListener('click', function() {
    burgerIcon.classList.toggle('menu__burger--active');
    document.body.classList.toggle('no-scroll');
    burgerMenu.classList.toggle('header__nav--active')
})