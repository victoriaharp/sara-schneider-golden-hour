const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu')

function toggleBurger() {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('active')
}

burgerButton.addEventListener('click', toggleBurger)


	

// jQuery
// A $( document ).ready() block.
$( document ).ready(function() {
    // Slide carousel
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        arrows: true,
        accessibility: true,
        dots: true,
        fade: false,
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
});