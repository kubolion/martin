 var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 5,
        slideShadows: false,
      
      },  
      loop: true,
      
      pagination: {
        el: ".swiper-pagination",
      },
    });