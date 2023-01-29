/*.........................................................Панель Amount.................................................*/

const friendBar = document.querySelectorAll('.friend_bar_hover_img')
const friendPay = document.querySelectorAll('.pick_and_feed_friend_pay_number')
const another = document.querySelector('.pick_and_feed_friend_another')

function styleFriendBar() {
  for (let el of friendBar) {
    el.classList.remove('hover_number_active')
  }
  for (let el of friendPay) {
    el.classList.remove('number_active')
  }
} //всем элементам сбрасываем кружок

for (let i = 0; i < friendBar.length; i++) {
  friendBar[i].addEventListener('click', function () {
    styleFriendBar()
    friendBar[i].classList.add('hover_number_active')
    friendPay[i].classList.add('number_active')
    another.value = friendPay[i].textContent.trim()
  })
} //на клик по кружку стилизуем цветом

another.addEventListener('input', function () {
  for (let i = 0; i < friendPay.length; i++) {
    if (another.value === friendPay[i].textContent.trim()) {
      friendBar[i].click()
      break
    } else {
      styleFriendBar()
    }
  }
}) //вписываем значение в поле

/*.........................................................бургер-меню.................................................*/

const burgerMenuBtn = document.querySelector('.burger_menu_btn')
const overlayOpen = document.querySelector('.tickets_popup_overlay_open')
const burgerToggle = document.querySelector('.burger_menu_toggle')

burgerMenuBtn.addEventListener('click', function () {
  overlayOpen.classList.toggle('tickets_popup_overlay_open')
  overlayOpen.classList.toggle('tickets_popup_overlay_close')
})

overlayOpen.addEventListener('click', function () {
  overlayOpen.classList.toggle('tickets_popup_overlay_open')
  overlayOpen.classList.toggle('tickets_popup_overlay_close')
  burgerToggle.click()
})
