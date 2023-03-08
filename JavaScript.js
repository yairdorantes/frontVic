
 const d = document
const navToggle = d.querySelector(".nav-toggle");
const navMenu = d.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});





d.addEventListener("click",e=>{
    if(e.target.className==="nav-menu-link nav-link"){
    navMenu.classList.toggle("nav-menu_visible");
   }

   

})

const swiper = new Swiper(".swiper-hero", {
    

  direction: "horizontal",
  loop: true,
   allowTouchMove: true,
   effect: "hash-navigation",

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  }
  
},
);