document.querySelector('.hamburger').addEventListener('click', () => {
    console.log('Hamburger button clicked');
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
});