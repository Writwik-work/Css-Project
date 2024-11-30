document.querySelector('.hamburger').addEventListener('click', function () {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('mobile-menu');
  });