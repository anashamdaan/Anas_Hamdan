document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  document.querySelector('.hamburger').addEventListener('click', () => {
    console.log('Hamburger button clicked');
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
  });
  
  
