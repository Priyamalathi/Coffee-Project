const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

// Toggle mobile menu visibility when the open button is clicked
menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

// Close the menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

//Close the menu when the navlink is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => menuCloseButton.click());
});

// Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});