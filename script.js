let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * -2.5 + 'px';
    header1.style.marginTop = value * -1.2 + 'px';
    image.style.height = `${value / window.innerHeight} * 200%`;
    
});

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('')
};
  
function updateActiveLink(element) {
    var navLinks = document.getElementsByClassName("navigation")[0].getElementsByTagName("a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("active");
        
    }
    element.classList.add("active");
}

// Get all section elements
const sections = document.querySelectorAll(".title, .section");

// Get nav links 
const navLinks = document.querySelectorAll(".navigation a");

// Scroll event handler
window.addEventListener("scroll", () => {

  // Get current scroll position
  let current = "";
  
  // Get section in viewport
  sections.forEach(section => {
   
    // Get section ID 
    const sectionID = section.getAttribute("id");
    
    // If scroll position is inside this section
    if(scrollY >= (section.offsetTop - 50)){
      current = sectionID; 
    }
  });

  // Set active state on link
  navLinks.forEach(link => {
   
    link.classList.remove("active");
    
    if(link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }

  });

});
