let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * -1.5 + 'px';
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

// Get all section IDs 
const sections = document.querySelectorAll("section.section");

// Get nav links
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    if(pageYOffset >= sectionTop - 60){
      current = section.getAttribute('id');   
    }
  })

  navLinks.forEach(link => {
     link.classList.remove('active');
     if(link.href.includes(current)){
        link.classList.add('active');
     }
  })

});