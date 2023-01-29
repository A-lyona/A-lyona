/*.........................................................бургер-меню.................................................*/

const burgerMenuBtn = document.querySelector('.burger_menu_btn')
const overlayOpen = document.querySelector('.burger_overlay_open')
const burgerToggle = document.querySelector('.burger_menu_toggle')

burgerMenuBtn.addEventListener('click', function () {
  overlayOpen.classList.toggle('burger_overlay_open')
  overlayOpen.classList.toggle('burger_overlay_close')
  if (overlayOpen.classList.contains('burger_overlay_close')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'visible'
  }
}) //закрываем бургер кликом по крестику

overlayOpen.addEventListener('click', function () {
  overlayOpen.classList.toggle('burger_overlay_open')
  overlayOpen.classList.toggle('burger_overlay_close')
  document.body.style.overflow = 'visible'
  burgerToggle.click()
}) //закрываем бургер кликом по пустому полю

/*..........................................................модальное окно.................................................*/

const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')
const span = document.getElementsByClassName('close')[0]
const modal3 = document.getElementById('myModal3')
const btn3 = document.getElementById('myBtn3')
const span3 = document.getElementsByClassName('close3')[0]
const modal4 = document.getElementById('myModal4')
const btn4 = document.getElementById('myBtn4')
const span4 = document.getElementsByClassName('close4')[0]

btn.onclick = function () {
  modal.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

span.onclick = function () {
  modal.style.display = 'none'
  document.body.style.overflow = 'visible'
}

btn3.onclick = function () {
  modal3.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

span3.onclick = function () {
  modal3.style.display = 'none'
  document.body.style.overflow = 'visible'
}

btn4.onclick = function () {
  modal4.style.display = 'block'
  document.body.style.overflow = 'hidden'
}

span4.onclick = function () {
  modal4.style.display = 'none'
  document.body.style.overflow = 'visible'
}

window.addEventListener('click', function (event) {
  //клик по пустому полю при попапе
  if (event.target === modal) {
    modal.style.display = 'none'
    document.body.style.overflow = 'visible'
  } else if (event.target === modal3) {
    modal3.style.display = 'none'
    document.body.style.overflow = 'visible'
  } else if (event.target === modal4) {
    modal4.style.display = 'none'
    document.body.style.overflow = 'visible'
  }
})

//............................................volume-Mute-volume.................................................//

const kardWrapper = document.querySelector('.testimonials_kard_wrapper')
const inputLine = document.querySelector('.testimonials_line')

inputLine.addEventListener('input', function () {
  if (window.innerWidth > 1597) {
    kardWrapper.style.left = `${inputLine.value * -297}px`
  } else {
    kardWrapper.style.left = `${inputLine.value * -322}px`
  }
}) //двигаем блок с отзывами

/*..........................................................карусель.................................................*/

const leftArrow = document.querySelector('.pets_left_arrow')
const rightArrow = document.querySelector('.pets_right_arrow')
const arrowL = document.querySelector('.arrow_left')
const arrowR = document.querySelector('.arrow_right')
const petsKardWrapper = document.querySelector('.pets_kard_wrapper')
const petsKardImg = document.querySelectorAll('.pets_kard_img')
const petsKardSubtitle = document.querySelectorAll('.pets_kard_subtitle')

const pets = {
  1: ['../../assets/1.png', 'giant Pandas'],
  2: ['../../assets/2.png', 'Eagles'],
  3: ['../../assets/3.png', 'Gorillas'],
  4: ['../../assets/4.png', 'Two-toed Sloth'],
  5: ['../../assets/5.png', 'cheetahs'],
  6: ['../../assets/6.png', 'Penguins'],
  7: ['../../assets/7.png', 'Alligators'],
  8: ['../../assets/8.png', 'piggy bank'],
  9: ['../../assets/9.png', 'rosette'],
  10: ['../../assets/10.png', 'Piggy'],
  11: ['../../assets/11.png', 'Pig'],
  12: ['../../assets/12.png', 'Ormie'],
  13: ['../../assets/13.png', 'piglet'],
  14: ['../../assets/14.png', 'plump'],
  15: ['../../assets/15.png', 'Chunya'],
  16: ['../../assets/16.png', 'peppa'],
  17: ['../../assets/17.png', 'pumba'],
  18: ['../../assets/18.png', 'pua'],
}

let arrRandomKard = []

leftArrow.addEventListener('click', function () {
  petsKardWrapper.style.left = '0px'
  leftArrow.disabled = true
  rightArrow.disabled = true
  setTimeout(function () {
    petsKardWrapper.style.transition = '0s'
    petsKardWrapper.style.left = '2376px'
  }, 300)
  setTimeout(randomKardPets, 310)
  setTimeout(function () {
    petsKardWrapper.style.transition = '0.3s'
    petsKardWrapper.style.left = '1188px'
  }, 330)
  setTimeout(function () {
    leftArrow.disabled = false
    rightArrow.disabled = false
  }, 630)
})

rightArrow.addEventListener('click', function () {
  petsKardWrapper.style.left = '2376px'
  leftArrow.disabled = true
  rightArrow.disabled = true
  setTimeout(function () {
    petsKardWrapper.style.transition = '0s'
    petsKardWrapper.style.left = '0px'
  }, 300)
  setTimeout(randomKardPets, 310)
  setTimeout(function () {
    petsKardWrapper.style.transition = '0.3s'
    petsKardWrapper.style.left = '1188px'
  }, 330)
  setTimeout(function () {
    leftArrow.disabled = false
    rightArrow.disabled = false
  }, 630)
})

arrowL.addEventListener('click', function () {
  petsKardWrapper.style.left = '0px'
  leftArrow.disabled = true
  rightArrow.disabled = true
  setTimeout(function () {
    petsKardWrapper.style.transition = '0s'
    petsKardWrapper.style.left = '2376px'
  }, 300)
  setTimeout(randomKardPets, 310)
  setTimeout(function () {
    petsKardWrapper.style.transition = '0.3s'
    petsKardWrapper.style.left = '1188px'
  }, 330)
  setTimeout(function () {
    leftArrow.disabled = false
    rightArrow.disabled = false
  }, 630)
})

arrowR.addEventListener('click', function () {
  petsKardWrapper.style.left = '2376px'
  leftArrow.disabled = true
  rightArrow.disabled = true
  setTimeout(function () {
    petsKardWrapper.style.transition = '0s'
    petsKardWrapper.style.left = '0px'
  }, 300)
  setTimeout(randomKardPets, 310)
  setTimeout(function () {
    petsKardWrapper.style.transition = '0.3s'
    petsKardWrapper.style.left = '1188px'
  }, 330)
  setTimeout(function () {
    leftArrow.disabled = false
    rightArrow.disabled = false
  }, 630)
})

function randomKard() {
  return Math.floor(Math.random() * 18) + 1 //генератор случайности
}

function pushKard() {
  arrRandomKard = [] //массив с рандомными числами
  while (arrRandomKard.length < 8) {
    let randomNumber = randomKard()
    if (!arrRandomKard.includes(randomNumber)) {
      arrRandomKard.push(randomNumber)
    }
  }
}

function randomKardPets() {
  pushKard()
  for (let i = 0; i < arrRandomKard.length; i++) {
    petsKardImg[i].src = pets[arrRandomKard[i]][0]
    petsKardSubtitle[i].textContent = pets[arrRandomKard[i]][1]
  } //подставляем рандомную картинку+текст в карточку
}
randomKardPets()
