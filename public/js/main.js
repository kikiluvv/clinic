// Set the first service child to be active by default
document.querySelector(".service-child").classList.add("active-service");

function showService(serviceName) {
    // Get the image and description elements
    var imageCont = document.getElementById("service-image");
    var description = document.getElementById("service-description");
  
    // Update the image and description based on the selected service
    if (serviceName === "service1") {
      imageCont.style.backgroundImage = "url('/assetts/index/family.jpg')";
      description.innerHTML = "Welcome to our family primary care clinic, where your health is our top priority. Our team of dedicated healthcare professionals provides personalized and comprehensive care for patients of all ages. From routine check - ups to chronic disease management, we offer a wide range of services to help you achieve and maintain optimal health. With a focus on preventative care, patient education, and compassion, we strive to be your trusted partner in healthcare.";
    } else if (serviceName === "service2") {
      imageCont.style.backgroundImage = "url('/assetts/index/women.jpg')";
      description.innerHTML = "At our internal medicine clinic, we go above and beyond to provide comprehensive primary care that caters specifically to adult patients. With a strong emphasis on preventive medicine, we strive to keep you healthy and proactive in managing your well-being. Our dedicated team promptly addresses any acute medical issues that may arise, ensuring timely and effective treatment. We understand the challenges posed by chronic diseases and offer extensive support to help you effectively manage them, empowering you to lead a fulfilling and healthy life.";
    } else if (serviceName === "service3") {
      imageCont.style.backgroundImage = "url('/assetts/index/old.jpg')";
      description.innerHTML = "Welcome to our geriatric care section, where we provide specialized care and support for older adults. Our team of healthcare professionals is dedicated to promoting the health and well-being of our aging patients. We understand that aging can bring unique challenges and health concerns, and we're here to provide comprehensive care that addresses the physical, emotional, and social aspects of aging. From managing chronic conditions to ensuring medication safety, we offer a range of services that are tailored to the individual needs of our patients.";
    }
  
    // Remove the "active-service" class from all service child elements
    var serviceChildren = document.querySelectorAll(".service-child");
    serviceChildren.forEach(function (child) {
      child.classList.remove("active-service");
      child.classList.add("notactive-service");
    });
  
    // Add the "active-service" class to the selected service child element
    var selectedService = document.querySelector(".service-child[data-service='" + serviceName + "']");
    selectedService.classList.remove("notactive-service");
    selectedService.classList.add("active-service");
  }

  

  function scrollEffect() {
    var text = document.querySelector(".about-text-container");
    var scrollPosition = window.pageYOffset;
  
    if (scrollPosition >= text.offsetTop - window.innerHeight && scrollPosition <= text.offsetTop + text.offsetHeight) {
      var distance = scrollPosition - text.offsetTop;
      var opacity = 1 - distance / (window.innerHeight / 1.5);
      text.style.opacity = opacity;
    } else {
      text.style.opacity = 0;
    }
  }
  
  window.addEventListener("scroll", scrollEffect);
  
  
  
  var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
