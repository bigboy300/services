const toggleButton = document.getElementById('toggleButton')

const lastThreeContainers = Array.from(
  document.getElementsByClassName('block')
).slice(8, 11)
const lastFiveContainers = Array.from(
  document.getElementsByClassName('block')
).slice(6, 11)

let isElementVisible = false
if (window.innerWidth < 1120) {
  toggleButton.addEventListener('click', () => {
    if (isElementVisible) {
      lastFiveContainers.forEach((el) => {
        el.style.display = 'none'
      })
      toggleButton.textContent = 'Показать всё'
      isElementVisible = false
    } else {
      lastFiveContainers.forEach((el) => {
        el.style.display = 'flex'
      })
      toggleButton.textContent = 'Скрыть'
      isElementVisible = true
    }
  })
}
if (window.innerWidth > 1120) {
  toggleButton.addEventListener('click', () => {
    if (isElementVisible) {
      lastThreeContainers.forEach((el) => {
        el.style.display = 'none'
      })
      toggleButton.textContent = 'Показать всё'
      isElementVisible = false
    } else {
      lastThreeContainers.forEach((el) => {
        el.style.display = 'flex'
      })
      toggleButton.textContent = 'Скрыть'
      isElementVisible = true
    }
  })
}

const swiper = new Swiper('.mySwiper', {
  //

  direction: 'horizontal',
  loop: true,
  speed: 500,
  effect: 'slider',
  // initialSlide: 2, // Начинаем со 2 слайдера
  // freeMode: true, // можно перетаскивать как ленту
  slidesPerView: 3, // кол-во активных слайдов
  // centeredSlides: true, // центрирование слайдов

  //                 Пагинация (точки)
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // true - Пагинация становится кликабельной
  },

  //                   Кнопки вперед и назад
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //  Автоматическое перелистывание
  // autoplay: {
  //     delay: 1000, //Задержка перед перелистыванием 1с = 1000мл/с
  // },
})
