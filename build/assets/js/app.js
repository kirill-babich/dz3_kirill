const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        520: {
            slidesPerView: 2,
          },
        768: {
          slidesPerView: 3,
        },
        // when window width is >= 480px
        1024: {
          slidesPerView: 4,
        },
        // when window width is >= 640px
        1300: {
          slidesPerView: 5,
        }
        
      }
});