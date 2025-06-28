// Animation de fade-in au scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Machine à écrire
  const typingText ="Informaticienne";
  let i = 0;
  const target = document.querySelector(".hero h2");
  function typeWriter() {
    if (i < typingText.length) {
      target.textContent += typingText.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    }
  }
 target.textContent = "";
  typeWriter();


  // Burger menu (affichage mobile)
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


const galeries = document.querySelectorAll('.galerie-container');

  galeries.forEach(container => {
    const galerie = container.querySelector('.galerie');
    const gauche = container.querySelector('.fleche1');
    const droite = container.querySelector('.fleche2');

    gauche.addEventListener('click', () => {
      galerie.scrollBy({ left: -300, behavior: 'smooth' });
    });

    droite.addEventListener('click', () => {
      galerie.scrollBy({ left: 300, behavior: 'smooth' });
    });
});


document.getElementById("annee").textContent=new Date().getFullYear();
