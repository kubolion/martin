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
        delay:3000,
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


// var swiper = new Swiper(".swiper-partners", {

//   onInit:setHeightSlides,
//   onUpdate:setHeightSlides ,
//   modules:Autoplay ,
//   autoplay:{delay: 0 , pauseOnMouseEnter: false,},
//   speed:2000,
//   allowTouchMove:false,
//   slidesPerView:3.9,
//   centeredSlides:true,
//   loop:true,
//   loopAdditionalSlides:3,
//   loopPreventsSliding:true,
//   spaceBetween:32,
//   breakpoints:{
//       0: {
//           spaceBetween: 16,
//           slidesPerView: 1.6
//       },
//       768: {
//           spaceBetween: 16,
//           slidesPerView: 2.6
//       },
//       1024: {
//           spaceBetween: 32,
//           slidesPerView: 3.9
//       }
//   }  
// })