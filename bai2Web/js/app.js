const blurHeaderText = () => {
  const headerText = document.querySelector(".header-center_text");


  this.scrollY >= 50 ? headerText.style.display = "none" : headerText.style.display = 'block';

  const header = document.querySelector(".header-top");

  this.scrollY >= 50 ? header.classList.add('active') : header.classList.remove('active');
}
window.addEventListener('scroll', blurHeaderText);
// product

const tabs = document.querySelectorAll('.tab-btn');
const all_content = document.querySelectorAll('.section-product-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab => { tab.classList.remove('active') })
    tab.classList.add('active');
    all_content.forEach(tab => { tab.classList.remove('active') })
    all_content[index].classList.add('active');
  });
});



//









const swiper = new Swiper(".sliderbox", {
  loop: true,
  effect: "fade",
  autoHeigh: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  zoom: 4,
});




//product
var swiper2 = new Swiper(".section-product-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


