let galleryWrapper = document.querySelector('.gallery_wrapper')
const apiURL = 'https://api.unsplash.com/search/photos?query='
const myApi =
  'https://api.unsplash.com/search/photos?query=pig&per_page=9&orientation=landscape&client_id=Pk2ygk8ymBJ2rlOFANwd0wnF8wnHG4e1zOHWwF_SYyc'
let headerForm = document.querySelector('.header_form')
let headerSearch = document.querySelector('.header_search')
let mainTest = document.querySelector('.main')
let header = document.querySelector('.header')
let footer = document.querySelector('footer')
let bigImgNone = document.querySelector('.bigImgNone')

async function getData(myApi) {
  // получаем данные от апи
  const res = await fetch(myApi)
  const data = await res.json()
  if (data.total > 0) {
    // доступ к данным апи
    showData(data)
  } else {
    alert('Enter the correct request')
  }
}
getData(myApi)

function showData(data) {
  document.querySelector('.gallery_wrapper').innerHTML = '' // содержимое из контейнера с картинками
  data.results.map((value) => {
    const img = `<img class="main_gallery_img" src="${value.urls.regular}">`
    galleryWrapper.insertAdjacentHTML('beforeend', img) // записываем каждую новую картинку после предыдущей
  })
  const imgArrApi = document.querySelectorAll('.main_gallery_img')
  for (let i = 0; i < imgArrApi.length; i++) {
    // перебираем все картинки
    imgArrApi[i].addEventListener('click', function () {
      //на нужную вешаем клик
      galleryWrapper.style.display = 'none'
      header.style.display = 'none'
      footer.style.display = 'none'
      bigImgNone.style.display = 'flex'
      const divImg = `<div class="bigImg">` // создаем новый див
      mainTest.insertAdjacentHTML('beforeend', divImg) // записываем картинки в конец дива
      const newImg = document.querySelector('.bigImg') // добавляем диву класс
      newImg.style.backgroundImage = `url(${data.results[i].urls.regular})` // заливаем картинки в див
      bigImgNone.addEventListener('click', removeBigImg)
    })
  }
}

function removeBigImg() {
  mainTest.removeChild(mainTest.lastChild) // убираем полноэкранный режим картинки
  galleryWrapper.style.display = 'flex'
  header.style.display = 'flex'
  footer.style.display = 'flex'
  bigImgNone.style.display = 'none'
  bigImgNone.removeEventListener('click', removeBigImg)
}

headerForm.addEventListener('submit', function (event) {
  event.preventDefault() // проверка на корректность данных в поле инпут и отменяет работу браузера по умолчанию
  const apiSearchURL = `${apiURL}${headerSearch.value}&per_page=9&orientation=landscape&client_id=Pk2ygk8ymBJ2rlOFANwd0wnF8wnHG4e1zOHWwF_SYyc`
  getData(apiSearchURL) // получение и загрузка картинок из инпута через апи
})
