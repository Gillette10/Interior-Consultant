const menu_btn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})
