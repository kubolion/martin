 var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",



      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 5.44,
        slideShadows: false,
      
      },
      autoplay:{
        delay:33000,
      }  ,
      speed:500,
      loop: true,
      
      pagination: {
        el: ".pagination-btn",
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".nav-btn_next",
        prevEl: ".nav-btn_prev",
      },
    });