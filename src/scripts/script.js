const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
  if (scrollPercentage === 1) {
    header.classList.remove('header--darkened');
  } else if (scrollPercentage > 0.1) {
    header.classList.add('header--darkened');
  } else {
    header.classList.remove('header--darkened');
  }
});
