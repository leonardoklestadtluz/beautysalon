// abre e fecha o menu quando clicado
const nav = document.querySelector("#header nav");
const toogle = document.querySelectorAll("nav .toogle");

for (const element of toogle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// esconde o menu quando clicamos em um item do menu
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

// mudar o header da página quando der scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add("scroll");
  } else {
    // menor que a altura do header
    header.classList.remove("scroll");
  }
}

/* Testimonials carousel slider swper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keybord: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

/* ScrollReveal: Mostrar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
  orgigin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text`,
  `#home .image, #about .text`,
  `#services .header, #services .card`,
  `#testmonials .header, #testmonials .testmonials`,
  `#contact .text, #contact .links`,
  `footer .brand, footer .social`,

  { interval: 400 }
);

/* Botão voltar para o topo */
const backToTopButton = document.querySelector(".back-to-top");
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

/* Menu ativo conforme a seção  visível na página */
const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (const section of sections) {
    const sectionTop = section.offSetTop;
    const sectionHeight = section.offSetTop;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint <= sectionTop;
    const chekpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && chekpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

/* Hen Scroll */
window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
