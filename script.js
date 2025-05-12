let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * -2.5 + "px";
});

document.getElementById("navbarToggler").addEventListener("click", function () {
  const navbarCollapse = document.getElementById("navbarCollapse");

  navbarCollapse.classList.toggle("show");
});

function updateActiveLink(element) {
  var navLinks = document
    .getElementsByClassName("navigation")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }
  element.classList.add("active");
  navbarCollapse.classList.toggle("show");
}

const sections = document.querySelectorAll(".title, .section");

const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionID = section.getAttribute("id");

    if (scrollY >= section.offsetTop - 100) {
      current = sectionID;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const projects = document.querySelectorAll('.project');
const rouletteItems = document.querySelectorAll('.roulette-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = Array.from(projects).indexOf(entry.target);

      // Change background
      entry.target.parentElement.parentElement.style.backgroundImage = `url('${entry.target.getAttribute('data-bg')}')`;

      // Update roulette
      rouletteItems.forEach(item => item.classList.remove('active'));
      if (rouletteItems[index]) {
        rouletteItems[index].classList.add('active');
      }
    }
  });
}, {
  threshold: 0.6
});

projects.forEach(project => {
  observer.observe(project);
});

document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
          }
      });
  }, {threshold: 0.2});

  document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(element => {
      element.classList.add('will-animate');
      observer.observe(element);
  });
});