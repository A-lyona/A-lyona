OmRangeSlider.init()

/*.........................................................filter.................................................*/

let asideFilterClick = document.querySelectorAll('.aside_filter_click')

for (let i = 0; i < asideFilterClick.length; i++) {
  asideFilterClick[i].addEventListener('click', function () {
    asideFilterClick[i].classList.toggle('aside_filter_border')
    localStorage.setItem(
      `asideFilterClick${i}`,
      `${asideFilterClick[i].classList.contains('aside_filter_border')}`
    )
    sortCategory()
  })
  if (localStorage.getItem(`asideFilterClick${i}`) == 'true') {
    asideFilterClick[i].classList.add('aside_filter_border')
  }
}

/*.........................................................cart.................................................*/

let payBtn = document.querySelectorAll('.card_cart')
let textCart = document.querySelectorAll('.text_cart')
let cartNumber = document.querySelector('.header_cart_text')
let arrPayBtn = []
if (
  localStorage.getItem('btn') === '' ||
  localStorage.getItem('btn') === null
) {
} else {
  arrPayBtn = localStorage.getItem('btn').split(',')
}

for (let i = 0; i < arrPayBtn.length; i++) {
  payBtn[+arrPayBtn[i]].style.backgroundColor = '#A64600'
  textCart[+arrPayBtn[i]].textContent = 'УДАЛИТЬ'
}

/*добавление-удаление из корзины*/
for (let i = 0; i < payBtn.length; i++) {
  payBtn[i].addEventListener('click', function () {
    if (textCart[i].textContent === 'ДОБАВИТЬ') {
      if (cartNumber.textContent === '20') {
        alert('Извините, все слоты заполнены')
      } else {
        payBtn[i].style.backgroundColor = '#A64600'
        textCart[i].textContent = 'УДАЛИТЬ'
        cartNumber.textContent++
        arrPayBtn.push(i)
      }
    } else {
      payBtn[i].style.backgroundColor = '#00675C'
      textCart[i].textContent = 'ДОБАВИТЬ'
      cartNumber.textContent--
      for (let j = 0; j < arrPayBtn.length; j++) {
        if (+arrPayBtn[j] === i) {
          arrPayBtn.splice(j, 1)
        }
      }
    }
    localStorage.setItem('cart', cartNumber.textContent)
    localStorage.setItem('btn', arrPayBtn.join())
  })
}
cartNumber.textContent = localStorage.getItem('cart') || '0'
//localStorage.setItem('cart', '0');

/*.........................................................sort.................................................*/

let selValue = document.querySelector('.aside_selValue')
let selValueSelected1 = document.querySelector('.selValue_selected1')
let selValueSelected2 = document.querySelector('.selValue_selected2')
let selValueSelected3 = document.querySelector('.selValue_selected3')
let selValueSelected4 = document.querySelector('.selValue_selected4')
let card = document.querySelectorAll('.card')
let arrName = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
]
let arrNameRev = [...arrName].reverse()
let arrYear = [
  18, 9, 19, 4, 5, 17, 6, 14, 20, 15, 10, 16, 3, 2, 8, 21, 7, 12, 1, 11, 13,
]
let arrYearRev = [
  4, 13, 3, 18, 17, 5, 16, 8, 2, 7, 12, 6, 19, 20, 14, 1, 15, 9, 21, 11, 10,
]
let checkboxOne = document.querySelector('.checkbox_one')
let checkboxTwo = document.querySelector('.checkbox_two')
let checkboxThree = document.querySelector('.checkbox_three')
let asideRangeCheckbox = document.querySelector('.aside_range_checkbox')
let asideFilterCheckbox = document.querySelectorAll('.aside_filter_checkbox')

function sortCard(arr) {
  for (let i = 0; i < card.length; i++) {
    card[i].style.order = `${arr[i]}`
  }
}

/*сортировка выпадающего меню*/
selValue.addEventListener('change', function () {
  localStorage.setItem('selValueSelected1', `${selValueSelected1.selected}`)
  localStorage.setItem('selValueSelected2', `${selValueSelected2.selected}`)
  localStorage.setItem('selValueSelected3', `${selValueSelected3.selected}`)
  localStorage.setItem('selValueSelected4', `${selValueSelected4.selected}`)
  clickSelValue()
})

function clickSelValue() {
  if (selValueSelected1.selected === true) {
    sortCard(arrName)
  } else if (selValueSelected2.selected === true) {
    sortCard(arrNameRev)
  } else if (selValueSelected3.selected === true) {
    sortCard(arrYear)
  } else {
    sortCard(arrYearRev)
  }
}

selValueSelected1.selected = localStorage.getItem('selValueSelected1') == 'true'
selValueSelected2.selected = localStorage.getItem('selValueSelected2') == 'true'
selValueSelected3.selected = localStorage.getItem('selValueSelected3') == 'true'
selValueSelected4.selected = localStorage.getItem('selValueSelected4') == 'true'
clickSelValue()

for (let i = 0; i < asideFilterCheckbox.length; i++) {
  asideFilterCheckbox[i].addEventListener('click', function () {
    localStorage.setItem('checkboxOne', `${checkboxOne.checked}`)
    localStorage.setItem('checkboxTwo', `${checkboxTwo.checked}`)
    localStorage.setItem('checkboxThree', `${checkboxThree.checked}`)
    sortCategory()
  })
}

checkboxOne.checked = localStorage.getItem('checkboxOne') == 'true'
checkboxTwo.checked = localStorage.getItem('checkboxTwo') == 'true'
checkboxThree.checked = localStorage.getItem('checkboxThree') == 'true'

/*сортировка по фильтрам*/
function sortCategory() {
  for (let i = 0; i < card.length; i++) {
    card[i].style.display = 'flex'
  }
  if (
    checkboxOne.checked === true ||
    checkboxTwo.checked === true ||
    checkboxThree.checked === true
  ) {
    /*сортировка категории*/
    for (let i = 0; i < card.length; i++) {
      card[i].style.display = 'none'
      if (
        checkboxOne.checked === true &&
        card[i].attributes.class.ownerElement.childNodes[1].children[5]
          .childNodes[0].data === 'Категория: мясная'
      ) {
        card[i].style.display = 'flex'
      }
      if (
        checkboxTwo.checked === true &&
        card[i].attributes.class.ownerElement.childNodes[1].children[5]
          .childNodes[0].data === 'Категория: мясо-сальная'
      ) {
        card[i].style.display = 'flex'
      }
      if (
        checkboxThree.checked === true &&
        card[i].attributes.class.ownerElement.childNodes[1].children[5]
          .childNodes[0].data === 'Категория: сальная'
      ) {
        card[i].style.display = 'flex'
      }
    }
  }
  if (
    asideFilterClick[0].classList.contains('aside_filter_border') ||
    asideFilterClick[1].classList.contains('aside_filter_border') ||
    asideFilterClick[2].classList.contains('aside_filter_border')
  ) {
    /*сортировка производитель*/
    for (let i = 0; i < card.length; i++) {
      if (card[i].style.display === 'flex') {
        if (
          (asideFilterClick[0].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[3]
              .childNodes[0].data === 'Производитель: Венгрия') ||
          (asideFilterClick[1].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[3]
              .childNodes[0].data === 'Производитель: Бельгия') ||
          (asideFilterClick[2].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[3]
              .childNodes[0].data === 'Производитель: Англия')
        ) {
          continue
        } else {
          card[i].style.display = 'none'
        }
      }
    }
  }
  if (
    asideFilterClick[3].classList.contains('aside_filter_border') ||
    asideFilterClick[4].classList.contains('aside_filter_border') ||
    asideFilterClick[5].classList.contains('aside_filter_border') ||
    asideFilterClick[6].classList.contains('aside_filter_border')
  ) {
    /*сортировка цвет*/
    for (let i = 0; i < card.length; i++) {
      if (card[i].style.display === 'flex') {
        if (
          (asideFilterClick[3].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[6]
              .childNodes[0].data === 'Цвет: розовый') ||
          (asideFilterClick[4].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[6]
              .childNodes[0].data === 'Цвет: коричневый') ||
          (asideFilterClick[5].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[6]
              .childNodes[0].data === 'Цвет: пятнистая') ||
          (asideFilterClick[6].classList.contains('aside_filter_border') &&
            card[i].attributes.class.ownerElement.childNodes[1].children[6]
              .childNodes[0].data === 'Цвет: чёрный')
        ) {
          continue
        } else {
          card[i].style.display = 'none'
        }
      }
    }
  }
  /*сортировка популярность*/
  if (asideRangeCheckbox.checked === true) {
    for (let i = 0; i < card.length; i++) {
      if (
        card[i].attributes.class.ownerElement.childNodes[1].children[8]
          .childNodes[0].data === 'Популярность: нет'
      ) {
        card[i].style.display = 'none'
      }
    }
  }
  clickSearch()
  for (let i = 0; i < card.length; i++) {
    if (card[i].style.display === 'flex') {
      break
    }
    if (i === 20) {
      setTimeout(function () {
        alert('По вашему запросу ничего не найдено')
      }, 30)
    }
  }
}

asideRangeCheckbox.addEventListener('click', function () {
  localStorage.setItem('asideRangeCheckbox', `${asideRangeCheckbox.checked}`)
  sortCategory()
})

asideRangeCheckbox.checked =
  localStorage.getItem('asideRangeCheckbox') == 'true'

/*.........................................................reset.................................................*/

let asideReset = document.querySelector('.aside_reset')
let asideResetAll = document.querySelector('.aside_reset_all')

/*кнопка сброса фильтров*/
asideReset.addEventListener('click', function () {
  checkboxOne.checked = false
  checkboxTwo.checked = false
  checkboxThree.checked = false
  asideRangeCheckbox.checked = false
  for (let i = 0; i < asideFilterClick.length; i++) {
    asideFilterClick[i].classList.remove('aside_filter_border')
  }
  for (let i = 0; i < card.length; i++) {
    card[i].style.display = 'flex'
  }
})

/*кнопка сброса всего*/
asideResetAll.addEventListener('click', function () {
  localStorage.clear()
  asideReset.click()
  selValueSelected1.selected = true
  sortCard(arrName)
  for (let i = 0; i < arrPayBtn.length; i++) {
    payBtn[+arrPayBtn[i]].style.backgroundColor = '#00675C'
    textCart[+arrPayBtn[i]].textContent = 'ДОБАВИТЬ'
  }
  cartNumber.textContent = '0'
})

/*.........................................................search.................................................*/

let headerSearch = document.querySelector('.header_search')

/*поиск*/
function clickSearch() {
  if (headerSearch.value !== '') {
    for (let i = 0; i < card.length; i++) {
      if (
        !card[
          i
        ].attributes.class.ownerElement.childNodes[1].children[0].childNodes[0].data
          .toLowerCase()
          .includes(headerSearch.value.toLowerCase().trim())
      ) {
        card[i].style.display = 'none'
      }
    }
  }
}

headerSearch.addEventListener('search', function () {
  sortCategory()
})

/*поиск через enter*/
headerSearch.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    sortCategory()
  }
})

sortCategory()
