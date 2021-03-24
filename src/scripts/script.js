const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.classList.add('header--darkened');
  } else {
    header.classList.remove('header--darkened');
  }
});
