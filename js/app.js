const headerBurger = document.querySelector('.header__burger')
headerBurger.addEventListener('click', function (event) {
  document.querySelector('.header__burger').classList.toggle('active')
  document.querySelector('.header__menu').classList.toggle('active')
})
