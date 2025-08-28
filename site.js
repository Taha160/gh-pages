function scrollToSection(hedefalan) {
    document.getElementById(hedefalan).scrollIntoView({
      behavior: "smooth"
    });
  }

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-tr]');

  elements.forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });
}


document.querySelectorAll('.sidebar button')[3].addEventListener('click', () => {
  setLanguage('tr');
});


document.querySelectorAll('.sidebar button')[4].addEventListener('click', () => {
  setLanguage('eng');
});

