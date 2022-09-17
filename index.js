// const bars = document.querySelector('.hemburger');
// bars.addEventListener('click', ()=>{
//     const ulItem = document.getElementById('ul');
//     ulItem.classList.toggle('nav_item')
// })

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1040:{
            slidesPerView: 3,
            spaceBetween: 20
        },
        600:{
            slidesPerView: 1,
            spaceBetween: 20
        },
        340:{
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
  });

