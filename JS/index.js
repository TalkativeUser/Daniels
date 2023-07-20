const sections = document.querySelectorAll('section');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  const currentLink = navbar.querySelector(`a[href="#${currentSection}"]`);
  const color = currentLink.getAttribute('data-color');
  navbar.style.backgroundColor = color;
});