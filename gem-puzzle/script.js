document.body.insertAdjacentHTML(
  'afterbegin',
  `<head>
<h1>Gem Puzzle</h1>
</head>
<main>
<div class="board_wrapper"></div>
<div class="first_wrapper">
  <h2 class="game">new game</h2>
  <select class="selValue">
    <option class="valueMenu" value="3">3х3</option>
    <option selected class="valueMenu" value="4">4х4</option>
    <option class="valueMenu" value="5">5х5</option>
    <option class="valueMenu" value="6">6х6</option>
    <option class="valueMenu" value="7">7х7</option>
    <option class="valueMenu" value="8">8х8</option>
  </select>
  <h2 class="save">save</h2>
  <h2 class="load">load</h2>
  <h2 class="records">records</h2>
</div>
<div class="records_wrapper">
  <div class="last_records">
    <div class="last_records_number">
      <p>1. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>2. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>3. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>4. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>5. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>6. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>7. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>8. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>9. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
  <div class="last_records">
    <div class="last_records_number">
      <p>10. You won in <span class="counter_records"></span> moves</p>
    </div>
  </div>
</div>
<div class="winner_wrapper">
  <h2 class="winner_content">
  Hooray! You solved the puzzle in <span class="time_min_win">##</span>:<span class="time_sec_win">##</span> and <span class="moves_content_win">N</span> moves!
  </h2>
</div>
</main>
<footer>
<div class="part_one">
  <div class="time"><span class="time_min">00</span>:<span class="time_sec">00</span></div>
  <div class="moves">Moves: <span class="moves_content">0</span></div>
</div>
<div class="part_two">
  <p class="settings">Settings</p>
  <div class="volume"></div>
</div>
</footer>`
)

/*.........................................................рандом.................................................*/

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/*.........................................................игровое поле.................................................*/

let audio = new Audio('assets/click.mp3')
let audioWin = new Audio('assets/win.mp3')
const body = document.querySelector('body')
const boardWrapper = document.querySelector('.board_wrapper')
const selValue = document.querySelector('.selValue')
let movesContent = document.querySelector('.moves_content')
let winnerContent = document.querySelector('.winner_wrapper')
let timeMinWin = document.querySelector('.time_min_win')
let timeSecWin = document.querySelector('.time_sec_win')
let movesContentWin = document.querySelector('.moves_content_win')
let timeMin = document.querySelector('.time_min')
let timeSec = document.querySelector('.time_sec')
let counterRecords = document.querySelectorAll('.counter_records')
let butEmpty
let but
let boardArr = []
let widthBoard = 4
let stopTimeout
let arrResults = [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]

function randomBut() {
  //создаем рандомный массив чисел
  boardArr = []
  for (let i = 0; i < widthBoard * widthBoard - 1; i++) {
    let newBut = getRandomInRange(1, widthBoard * widthBoard - 1)
    if (!boardArr.includes(newBut)) {
      boardArr.push(newBut)
    } else {
      i--
    }
  }
  winnerRandomBut()
}

function winnerRandomBut() {
  //проверка на собираемость игры
  let count = 0
  for (let i = 0; i < boardArr.length; i++) {
    for (let j = i + 1; j < boardArr.length; j++) {
      if (boardArr[j] < boardArr[i]) {
        count++
      }
    }
  }
  if ((count + widthBoard) % 2 === 0 && widthBoard % 2 === 0) {
    //поле четное, фишки четные - ничего не делаем
  } else if ((count + widthBoard) % 2 === 1 && widthBoard % 2 === 0) {
    //поле четное, фишки нечетные - меняем 2 фишки местами
    let hands = boardArr[0]
    boardArr[0] = boardArr[1]
    boardArr[1] = hands
  } else if ((count + widthBoard) % 2 === 0 && widthBoard % 2 === 1) {
    //поле нечетное, фишки четные - меняем 2 фишки местами
    let hands = boardArr[0]
    boardArr[0] = boardArr[1]
    boardArr[1] = hands
  } else if ((count + widthBoard) % 2 === 1 && widthBoard % 2 === 1) {
    //поле нечетное, фишки нечетные - ничего не делаем
  }
}

selValue.addEventListener('change', function () {
  //получаем числовое значение выбранного поля селект
  widthBoard = +selValue.value
})

function createBut() {
  //создаем новый элемент
  let elem = document.createElement('div')
  elem.classList.add('but')
  boardWrapper.appendChild(elem)
  elem.style.width = `${100 / widthBoard - 0.9}%`
  elem.style.height = `${100 / widthBoard - 0.9}%`
  elem.addEventListener('click', function () {
    if (volume.classList.contains('volume_mute')) {
      audio.stop()
    } else {
      audio.play()
    }
  })
}

function addKard() {
  //добавляем нужное количество элементов
  but = undefined
  for (let i = 1; i < widthBoard * widthBoard; i++) {
    createBut()
  }
  let elem = document.createElement('div')
  elem.classList.add('empty')
  boardWrapper.appendChild(elem)
  but = document.querySelectorAll('.but')
  for (let i = 0; i < but.length; i++) {
    but[i].textContent = boardArr[i]
    but[i].setAttribute('positionElem', i + 1)
    but[i].addEventListener('click', function () {
      //обработчик клика по элементу(меняет ходы, двигает элементы, проверяет победу)
      let butPosition = Number(but[i].getAttribute('positionElem'))
      let butEmptyPosition = Number(butEmpty.getAttribute('positionElem'))
      if (butPosition % widthBoard !== 1) {
        if (butPosition - 1 === butEmptyPosition) {
          // двигаем влево, уменьшаем left
          movesElem('left', but[i])
        }
      }
      if (butPosition % widthBoard !== 0) {
        if (butPosition + 1 === butEmptyPosition) {
          // двигаем вправо, увеличиваем left
          movesElem('right', but[i])
        }
      }
      if (butPosition > widthBoard) {
        if (butPosition - widthBoard === butEmptyPosition) {
          // двигаем вверх, уменьшаем top
          movesElem('top', but[i])
        }
      }
      if (butPosition <= (widthBoard - 1) * widthBoard) {
        if (butPosition + widthBoard === butEmptyPosition) {
          //двигаем вниз, увеличиваем top
          movesElem('bottom', but[i])
        }
      }
    })
  }
  butEmpty = document.querySelector('.empty')
  butEmpty.setAttribute('positionElem', widthBoard * widthBoard)
}

function movesElem(direction, butClick) {
  // функция двигает кликнутый элемент на пустое место
  movesContent.textContent = (Number(movesContent.textContent) + 1).toString()
  if (direction === 'left') {
    //считаем позицию влево
    let paddingElem =
      +window.getComputedStyle(butClick).left.slice(0, -2) -
      +window.getComputedStyle(boardWrapper).width.slice(0, -2) / widthBoard
    let widthBoardWrapper = +window
      .getComputedStyle(boardWrapper)
      .width.slice(0, -2)
    butClick.style.left = `${(paddingElem / widthBoardWrapper) * 100}%`
  } else if (direction === 'right') {
    //считаем позицию вправо
    let paddingElem =
      +window.getComputedStyle(butClick).left.slice(0, -2) +
      +window.getComputedStyle(boardWrapper).width.slice(0, -2) / widthBoard
    let widthBoardWrapper = +window
      .getComputedStyle(boardWrapper)
      .width.slice(0, -2)
    butClick.style.left = `${(paddingElem / widthBoardWrapper) * 100}%`
  } else if (direction === 'top') {
    //считаем позицию  вверх
    let paddingElem =
      +window.getComputedStyle(butClick).top.slice(0, -2) -
      +window.getComputedStyle(boardWrapper).width.slice(0, -2) / widthBoard
    let widthBoardWrapper = +window
      .getComputedStyle(boardWrapper)
      .width.slice(0, -2)
    butClick.style.top = `${(paddingElem / widthBoardWrapper) * 100}%`
  } else if (direction === 'bottom') {
    //считаем позицию вниз
    let paddingElem =
      +window.getComputedStyle(butClick).top.slice(0, -2) +
      +window.getComputedStyle(boardWrapper).width.slice(0, -2) / widthBoard
    let widthBoardWrapper = +window
      .getComputedStyle(boardWrapper)
      .width.slice(0, -2)
    butClick.style.top = `${(paddingElem / widthBoardWrapper) * 100}%`
  }
  let coopPosition = butClick.getAttribute('positionElem')
  butClick.setAttribute('positionElem', butEmpty.getAttribute('positionElem'))
  butEmpty.setAttribute('positionElem', coopPosition)
  winGame()
}

function startTime() {
  //запускаем счетчик времени при запуске игры
  stopTimeout = setTimeout(function () {
    if (+timeSec.textContent < 9) {
      timeSec.textContent = '0' + (+timeSec.textContent + 1).toString()
    } else if (+timeSec.textContent < 59) {
      timeSec.textContent = (+timeSec.textContent + 1).toString()
    } else {
      timeSec.textContent = '00'
      if (+timeMin.textContent < 9) {
        timeMin.textContent = '0' + (+timeMin.textContent + 1).toString()
      } else {
        timeMin.textContent = (+timeMin.textContent + 1).toString()
      }
    }
    startTime()
  }, 1000)
}

function newGame() {
  //заполняем поле элементами, начинаем игру
  deleteLastGame()
  addKard()
  timeSec.textContent = '00'
  timeMin.textContent = '00'
  startTime()
  movesContent.textContent = 0
  let count = 0
  for (let i = 0; i < widthBoard; i++) {
    for (let j = 0; j < widthBoard; j++) {
      if (count < widthBoard * widthBoard - 1) {
        but[count].style.left = `${j * (100 / widthBoard) + '%'}`
        but[count].style.top = `${i * (100 / widthBoard) + '%'}`
        count++
      }
    }
  }
}

function deleteLastGame() {
  //обнуляет предыдущую игру
  while (boardWrapper.firstChild) {
    boardWrapper.removeChild(boardWrapper.firstChild)
  }
}

function winGame() {
  //событие победы
  for (let i = 0; i < but.length; i++) {
    if (but[i].textContent !== but[i].getAttribute('positionElem')) {
      return
    }
  }
  addNewRecords()
  setTimeout(function () {
    boardWrapper.style.display = 'none'
    firstWrapper.style.display = 'none'
    winnerContent.style.display = 'flex'
    recordsWrapper.style.display = 'none'
    audioWin.play()
    timeMinWin.textContent = timeMin.textContent
    timeSecWin.textContent = timeSec.textContent
    movesContentWin.textContent = movesContent.textContent
    timeSec.textContent = '00'
    timeMin.textContent = '00'
    movesContent.textContent = 0
    clearTimeout(stopTimeout)
  }, 600)
}

function addNewRecords() {
  //записывает лучший результат в рекорды
  for (let i = 0; i < arrResults.length; i++) {
    if (+movesContent.textContent < arrResults[i]) {
      arrResults.pop()
      arrResults.push(+movesContent.textContent)
      arrResults.sort(function (a, b) {
        return a - b
      })
      break
    }
  }
  localStorage.setItem('result', arrResults.join(','))
}

/*.........................................................звук.................................................*/

let volume = document.querySelector('.volume')

volume.addEventListener('click', function () {
  //меняем по клику иконку звука
  volume.classList.toggle('volume_mute')
  if (volume.classList.contains('volume_mute')) {
    volume.style.background = 'url("assets/3.png")'
  } else {
    volume.style.background = 'url("assets/2.png")'
  }
})

/*.........................................................настройки.................................................*/

let firstWrapper = document.querySelector('.first_wrapper')
let recordsWrapper = document.querySelector('.records_wrapper')
let save = document.querySelector('.save')
let game = document.querySelector('.game')
let settings = document.querySelector('.settings')
let records = document.querySelector('.records')
let load = document.querySelector('.load')

save.addEventListener('click', function () {
  //клик по кнопке save
  document.body.classList.add('body_cu')
  setTimeout(() => document.body.classList.remove('body_cu'), 1000)
  timeSec.textContent = '00'
  timeMin.textContent = '00'
  movesContent.textContent = 0
})

game.addEventListener('click', function () {
  //клик по кнопке new game
  boardWrapper.style.display = 'block'
  firstWrapper.style.display = 'none'
  recordsWrapper.style.display = 'none'
  randomBut()
  newGame()
})

settings.addEventListener('click', function () {
  //клик по кнопке settings
  boardWrapper.style.display = 'none'
  recordsWrapper.style.display = 'none'
  winnerContent.style.display = 'none'
  firstWrapper.style.display = 'flex'
  clearTimeout(stopTimeout)
})

records.addEventListener('click', function () {
  //клик по кнопке records
  boardWrapper.style.display = 'none'
  firstWrapper.style.display = 'none'
  winnerContent.style.display = 'none'
  recordsWrapper.style.display = 'flex'
  arrResults = localStorage.getItem('result').split(',')
  for (let i = 0; i < 10; i++) {
    counterRecords[i].textContent = arrResults[i]
  }
})

load.addEventListener('click', function () {
  boardWrapper.style.display = 'flex'
  recordsWrapper.style.display = 'none'
  winnerContent.style.display = 'none'
  firstWrapper.style.display = 'none'
  startTime()
})
