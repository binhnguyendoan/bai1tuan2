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



//search

const searchIcons = document.querySelector(".search");

const search_close = document.querySelector(".icon-close");
const search = document.querySelector(".search-input");

searchIcons.addEventListener('click', () => {
  search.classList.toggle('active');
});
search_close.addEventListener('click', () => {
  search.classList.remove('active');

});
const scroll_search = () => {
  this.scrollY >= 50 ? search.classList.remove('active') : search.classList.remove('active');
}

window.addEventListener('scroll', scroll_search);







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

//cart

const cart_item = document.querySelector(".cart-icon");
const bag_cart = document.querySelector(".ri-handbag-line");
const cart = document.querySelector(".cart");
const cart_right = document.querySelector(".cart-item");
const cart_close = document.querySelector(".close-cart");

cart_item.addEventListener("click", () => {
  cart.classList.toggle("active");
  cart_right.classList.toggle("active");
});
cart_close.addEventListener("click", () => {
  cart.classList.remove("active");
  cart_right.classList.remove("active");
});
bag_cart.addEventListener("click", () => {
  cart.classList.add("active");
  cart_right.classList.add("active");
});
const hadeloverlay = () => {

  document.querySelector(".cart-overlay").addEventListener("click", () => {
    cart.classList.remove("active");
  });

}
window.addEventListener("click", hadeloverlay);

//menu-bag_cart

const has_link = document.querySelectorAll(".menu-bag-list-text");
const menu_bag = document.querySelectorAll(".menu-bag-list_content");
const plus_bag = document.querySelectorAll(".menu-bag-list-text i");
const menu = document.querySelector(".menu-bag");
const menu_click = document.querySelector(".header-top_menu");
const close_menu = document.querySelector(".menu-bag-item-close");
const menu_overplay = document.querySelector(".menu-bag-overlay");

menu_click.addEventListener("click", () => {
  menu.classList.add("active");
});
close_menu.addEventListener("click", () => {
  menu.classList.remove("active");
});
menu_overplay.addEventListener("click", () => {
  menu.classList.remove("active");
});



has_link.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu_bag.forEach((el, idx) => {
      if (idx !== index && el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });
    plus_bag.forEach((el, idx) => {
      if (idx !== index && el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });

    menu_bag[index].classList.toggle("active");
    plus_bag[index].classList.toggle("active");
  });
});