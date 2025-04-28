document.addEventListener("DOMContentLoaded", function() {
  // === MENÚ DESPLEGABLE ===
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function() {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && event.target !== menuToggle) {
      menu.style.display = "none";
    }
  });

  // === SCROLL INSTANTÁNEO y CIERRE DEL MENÚ ===
  const sobreMiBtn = document.getElementById('sobre-mi');
  const educacionBtn = document.getElementById('educacion');
  const experienciaBtn = document.getElementById('experiencia');
  const portafolioBtn = document.getElementById('portafolio');
  const misRendersBtn = document.getElementById('mis-renders');
  const contactoBtn = document.getElementById('contacto');

  // Función para hacer scroll a las posiciones específicas y cerrar el menú
  function scrollAndCloseMenu(scrollToPosition) {
    window.scrollTo(0, scrollToPosition);
    menu.style.display = "none"; // Cierra el menú después de hacer scroll
  }

  sobreMiBtn.addEventListener('click', function() {
    scrollAndCloseMenu(0); // Ir al inicio de la página
  });

  educacionBtn.addEventListener('click', function() {
    scrollAndCloseMenu(1205); // Ir a la sección Educación
  });

  experienciaBtn.addEventListener('click', function() {
    scrollAndCloseMenu(2450); // Ir a la sección Experiencia
  });

  portafolioBtn.addEventListener('click', function() {
    scrollAndCloseMenu(6755); // Ir a la sección Portafolio
  });

  misRendersBtn.addEventListener('click', function() {
    scrollAndCloseMenu(8655); // Ir a la sección Portafolio
  });

  contactoBtn.addEventListener('click', function() {
    scrollAndCloseMenu(document.body.scrollHeight); // Ir al final de la página
  });

  // === CARRUSELES ===
  function setupCarousel(carouselId, dotsId) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll(".carousel-image");
    const dots = document.getElementById(dotsId).querySelectorAll(".dot");

    let currentIndex = 0;

    // Muestra la imagen correspondiente al índice actual
    function showImage(index) {
      images.forEach((img, i) => {
        img.style.display = i === index ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    showImage(currentIndex);

    // Función para avanzar a la siguiente imagen (pero sin volver a la primera)
    function nextImage() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage(currentIndex);
      }
    }

    // Función para retroceder a la imagen anterior (pero sin ir a la última)
    function prevImage() {
      if (currentIndex > 0) {
        currentIndex--;
        showImage(currentIndex);
      }
    }

    let touchStartX = 0;
    let touchEndX = 0;

    // Maneja el toque de inicio para el deslizamiento
    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }

    // Maneja el toque final para el deslizamiento
    function handleTouchEnd(e) {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX) nextImage();
      if (touchEndX > touchStartX) prevImage();
    }

    carousel.addEventListener("touchstart", handleTouchStart, false);
    carousel.addEventListener("touchend", handleTouchEnd, false);
  }

  // Inicializa los carruseles A, B, C y D
  if (document.getElementById("carouselA")) setupCarousel("carouselA", "dotsA");
  if (document.getElementById("carouselB")) setupCarousel("carouselB", "dotsB");
  if (document.getElementById("carouselC")) setupCarousel("carouselC", "dotsC");
  if (document.getElementById("carouselD")) setupCarousel("carouselD", "dotsD");
  if (document.getElementById("carouselE")) setupCarousel("carouselE", "dotsE");
  
});
  // FINAL CELULAR





  // COMIENZO VERSIÓN COMPUTADORA
  // CARRUSELES COMPUTADORA
  document.addEventListener("DOMContentLoaded", function () {
    // Función para inicializar cada carrusel
    function initCarousel(carouselId) {
        const images = document.querySelectorAll(`#${carouselId} .carousel-image-compu`);
        const totalImages = images.length;
        let currentIndex = 0;

        // Mostrar la primera imagen
        images[currentIndex].classList.add("active");

        // Función para cambiar la imagen
        function changeImage(direction) {
            images[currentIndex].classList.remove("active");
            
            if (direction === "next") {
                currentIndex = (currentIndex + 1) % totalImages;
            } else {
                currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            }

            images[currentIndex].classList.add("active");
        }

        // Crear botones de navegación con Font Awesome
        const leftArrow = document.createElement("button");
        leftArrow.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
        leftArrow.classList.add("carousel-arrow", "left");
        leftArrow.addEventListener("click", () => changeImage("prev"));

        const rightArrow = document.createElement("button");
        rightArrow.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
        rightArrow.classList.add("carousel-arrow", "right");
        rightArrow.addEventListener("click", () => changeImage("next"));

        // Agregar botones al contenedor del carrusel
        const carouselContainer = document.querySelector(`#${carouselId}`).parentElement;
        carouselContainer.appendChild(leftArrow);
        carouselContainer.appendChild(rightArrow);
    }

    // Inicializa los cuatro carruseles
    //initCarousel("carouselA-compu");
    initCarousel("carouselB-compu");
    initCarousel("carouselC-compu");
    initCarousel("carouselD-compu");
    initCarousel("carouselE-compu");
});
// FINAL CARRUSELES COMPUTADORA

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach(item => {
    item.addEventListener("click", function () {
      const scrollTarget = this.getAttribute("data-scroll");

      // Scroll automático según el target
      if (scrollTarget === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (scrollTarget === "final") {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      } else {
        window.scrollTo({ top: parseInt(scrollTarget), behavior: "smooth" });
      }

      // Remover la clase 'active' de todos y agregarla al actual
      navItems.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
