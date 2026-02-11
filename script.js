/* ========================= */
/* PALABRAS EN MOVIMIENTO */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {

  const words = document.querySelectorAll('.keywords span');
  let t = 0;

  function animateWords() {
    t += 0.008;

    words.forEach((word, i) => {
      const speed = 0.6 + i * 0.15;
      const ampY = 18 + i * 4;
      const ampX = 12 + i * 3;

      const y = Math.sin(t * speed) * ampY;
      const x = Math.cos(t * speed * 0.8) * ampX;

      word.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animateWords);
  }

  if (words.length) animateWords();

  /* ========================= */
  /* REVEAL DE SECCIONES */
  /* ========================= */

  const reveals = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    reveals.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const trigger = window.innerHeight * 0.85;

      if (top < trigger) {
        section.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  /* ========================= */
  /* SERVICES SLIDE (CLAVE) */
  /* ========================= */

  const serviceSlides = document.querySelectorAll(".service-slide");

  serviceSlides.forEach(slide => {

    const openBtn = slide.querySelector(".open");
    const closeBtn = slide.querySelector(".close");

    if (openBtn) {
      openBtn.addEventListener("click", () => {
        slide.classList.add("active");
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        slide.classList.remove("active");
      });
    }

  });

});

document.querySelectorAll(".service-slide").forEach(slide => {
  const openBtn = slide.querySelector(".open");
  const closeBtn = slide.querySelector(".close");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      slide.classList.add("active");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      slide.classList.remove("active");
    });
  }
});

