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

new Swiper('.swiper')
