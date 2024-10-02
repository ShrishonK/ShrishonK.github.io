let text = document.getElementById("text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * -2.5 + "px";
});

document.getElementById("navbarToggler").addEventListener("click", function () {
  const navbarCollapse = document.getElementById("navbarCollapse");
  navbarCollapse.classList.toggle("active");
});

function updateActiveLink(element) {
  var navLinks = document
    .getElementsByClassName("navigation")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }
  element.classList.add("active");
}

const sections = document.querySelectorAll(".title, .section");

const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionID = section.getAttribute("id");

    if (scrollY >= section.offsetTop - 50) {
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
