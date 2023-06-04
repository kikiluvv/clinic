const topPage = document.getElementById('top');
const logo = document.getElementById('logo-img');
const navbar = document.getElementById('nav-wrapper');
const services = document.getElementById('services-section');
const providers = document.getElementById('providers-section');
const insurance = document.getElementById('insurance-section');
const contact = document.getElementById('contact-section');
const homeLink = document.getElementById('home-link');
const servLink = document.getElementById('services-link');
const provLink = document.getElementById('providers-link');
const insuLink = document.getElementById('insurance-link');
const contLink = document.getElementById('contact-link');
const scrollBtn = document.getElementById('scroll-button');
const content = document.getElementById('content-wrapper');


// Function to handle smooth scrolling with an offset
function scrollToSection(section) {
    const sectionTopOffset = section.offsetTop - (window.innerHeight * 0.01);
    window.scrollTo({ top: sectionTopOffset, behavior: 'smooth' });
}

// Event listeners for each navbar button
logo.addEventListener('click', () => {
    scrollToSection(topPage);
});

homeLink.addEventListener('click', () => {
    scrollToSection(topPage);
});

servLink.addEventListener('click', () => {
    scrollToSection(services);
});

provLink.addEventListener('click', () => {
    scrollToSection(providers);
});

insuLink.addEventListener('click', () => {
    scrollToSection(insurance);
});

contLink.addEventListener('click', () => {
    scrollToSection(contact);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  
  
