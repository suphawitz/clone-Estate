
// SlickJS 
$(document).ready(function(){

    // Slick Bg Header
    $('.es-header-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    // Slider Gallery
    $('.es-gallery-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

    $('.es-gallery-slider .slick-prev').html('<i class="fa-solid fa-angle-left"></i>');
    $('.es-gallery-slider .slick-next').html('<i class="fa-solid fa-angle-right"></i>');

});


// Scroll Animation on pages | Reveal Scroll

    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.es-scroll-reveal');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            // add scroll active
            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('es-scroll-active');
            }
            //  else {
            //     reveals[i].classList.remove('es-scroll-active');
            // }
        }
    }
