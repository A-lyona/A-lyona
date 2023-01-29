/*.........................................................flags.................................................*/

let wordRusLowerNumber = 'ё1234567890-=йцукенгшщзхъ\\фывапролджэячсмитьбю. '
let wordRusLowerNumberStatus = true
let wordRusUpperSymbol = 'Ё!"№;%:?*()_+ЙЦУКЕНГШЩЗХЪ/ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ, '
let wordRusUpperSymbolStatus = false
let wordEngLowerNumber = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./ "
let wordEngLowerNumberStatus = false
let wordEngUpperSymbol = '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>? '
let wordEngUpperSymbolStatus = false
let wordRusUpperNumber = 'ё1234567890-=ЙЦУКЕНГШЩЗХЪ\\ФЫВАПРОЛДЖЭЯЧСМИТЬБЮ. '
let wordRusUpperNumberStatus = false
let wordRusLowerSymbol = 'Ё!"№;%:?*()_+йцукенгшщзхъ/фывапролджэячсмитьбю, '
let wordRusLowerSymbolStatus = false
let wordEngUpperNumber = "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./ "
let wordEngUpperNumberStatus = false
let wordEngLowerSymbol = '~!@#$%^&*()_+qwertyuiop{}|asdfghjkl:"zxcvbnm<>? '
let wordEngLowerSymbolStatus = false

let isShiftActive = false
let isCapslockActive = false
let isSoundActive = true
let pointerPositionStart = 0
let pointerPositionEnd = 0
let textStart = ''
let textEnd = ''

/*.........................................................audio.................................................*/

let audioru = new Audio('audio/click.mp3')
let audioen = new Audio('audio/click_en.mp3')
let audio = new Audio('audio/click_func.mp3')
let audioS = new Audio('audio/shift.mp3')
let audioC = new Audio('audio/caps.mp3')
let audioB = new Audio('audio/backspace.mp3')
let audioE = new Audio('audio/enter.mp3')
let audioFlag = true

/*.........................................................display.................................................*/

let display = document.querySelector('.display')

display.addEventListener('click', pressDisplay)

function pressDisplay() {
  pointerPositionStart = display.selectionStart
  pointerPositionEnd = display.selectionEnd
  textStart = display.value.slice(0, pointerPositionStart)
  textEnd = display.value.slice(pointerPositionEnd, display.value.length)
  display.focus()
}

/*.........................................................all btn.................................................*/

let btnArray = document.querySelectorAll('.key_btn')
let otherArray2 = document.querySelectorAll('.other2')
let otherArray = document.querySelectorAll('.other')
let active = document.querySelectorAll('.active')

let SpeechRecognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition)()

for (let i = 0; i < btnArray.length; i++) {
  let currentBtn = btnArray[i]
  currentBtn.addEventListener('click', function (event) {
    pressBtn(event.target.textContent)
  })
}

for (let i = 0; i < active.length; i++) {
  let currentBtn = active[i]
  currentBtn.addEventListener('mousedown', function (event) {
    event.target.classList.add('meaning_active')
  })
}

for (let i = 0; i < active.length; i++) {
  let currentBtn = active[i]
  currentBtn.addEventListener('mouseup', function (event) {
    event.target.classList.remove('meaning_active')
  })
}

for (let i = 0; i < active.length; i++) {
  let currentBtn = active[i]
  currentBtn.addEventListener('mouseleave', function (event) {
    event.target.classList.remove('meaning_active')
  })
}

for (let i = 0; i < otherArray2.length; i++) {
  let currentOther2 = otherArray2[i]
  currentOther2.addEventListener('click', function (event) {
    audio.play()
  })
}

for (let i = 0; i < otherArray.length; i++) {
  let currentOther2 = otherArray[i]
  currentOther2.addEventListener('click', function (event) {
    audioC.play()
  })
}

function pressBtn(key_btn) {
  if (audioFlag) {
    audioru.play()
  } else {
    audioen.play()
  }
  pressDisplay()
  display.value = textStart + key_btn + textEnd
  if (isShiftActive) {
    pressShift()
  }
  display.focus()
  display.selectionStart = ++pointerPositionStart
  display.selectionEnd = display.selectionStart
  textStart = display.value.slice(0, pointerPositionStart)
  pointerPositionEnd = pointerPositionStart
}

/*.........................................................shift.................................................*/

let shiftBtn = document.querySelector('.shift')
let shift2Btn = document.querySelector('.shift2')

shiftBtn.addEventListener('click', pressShift)
shift2Btn.addEventListener('click', pressShift)

function pressShift() {
  pressDisplay()
  audioS.play()
  isShiftActive = !isShiftActive
  if (isShiftActive) {
    shiftBtn.style.background = '#b8aa9c'
    shift2Btn.style.background = '#b8aa9c'
    if (wordRusLowerNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordRusUpperSymbol[i]
      }
      wordRusLowerNumberStatus = false
      wordRusUpperSymbolStatus = true
    } else if (wordEngLowerNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordEngUpperSymbol[i]
      }
      wordEngLowerNumberStatus = false
      wordEngUpperSymbolStatus = true
    } else if (wordRusUpperNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordRusLowerSymbol[i]
      }
      wordRusUpperNumberStatus = false
      wordRusLowerSymbolStatus = true
    } else if (wordEngUpperNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordEngLowerSymbol[i]
      }
      wordEngUpperNumberStatus = false
      wordEngLowerSymbolStatus = true
    }
  } else {
    shiftBtn.style.background = '#554b42'
    shift2Btn.style.background = '#554b42'
    if (wordRusUpperSymbolStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordRusLowerNumber[i]
      }
      wordRusUpperSymbolStatus = false
      wordRusLowerNumberStatus = true
    } else if (wordEngUpperSymbolStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordEngLowerNumber[i]
      }
      wordEngUpperSymbolStatus = false
      wordEngLowerNumberStatus = true
    } else if (wordRusLowerSymbolStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordRusUpperNumber[i]
      }
      wordRusLowerSymbolStatus = false
      wordRusUpperNumberStatus = true
    } else if (wordEngLowerSymbolStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordEngUpperNumber[i]
      }
      wordEngLowerSymbolStatus = false
      wordEngUpperNumberStatus = true
    }
  }
  display.focus()
}

/*.........................................................capslock.................................................*/

let capslockBtn = document.querySelector('.capslock')

capslockBtn.addEventListener('click', pressCapslock)

function pressCapslock() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audioC.play()
  isCapslockActive = !isCapslockActive
  if (isCapslockActive) {
    capslockBtn.style.background = '#b8aa9c'
    if (wordRusLowerNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordRusUpperNumber[i]
      }
      wordRusLowerNumberStatus = false
      wordRusUpperNumberStatus = true
    } else if (wordEngLowerNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordEngUpperNumber[i]
      }
      wordEngLowerNumberStatus = false
      wordEngUpperNumberStatus = true
    }
  } else {
    capslockBtn.style.background = '#554b42'
    if (wordRusUpperNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordRusLowerNumber[i]
      }
      wordRusUpperNumberStatus = false
      wordRusLowerNumberStatus = true
    } else if (wordEngUpperNumberStatus) {
      for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = wordEngLowerNumber[i]
      }
      wordEngUpperNumberStatus = false
      wordEngLowerNumberStatus = true
    }
  }
  display.focus()
}

/*.........................................................ruen.................................................*/

let ruenBtn = document.querySelector('.ruen')

ruenBtn.addEventListener('click', pressRuen)

if (localStorage.getItem('lang') === 'en') {
  for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].textContent = wordEngLowerNumber[i]
  }
  wordRusLowerNumberStatus = false
  wordEngLowerNumberStatus = true
  localStorage.setItem('lang', 'en')
}

function pressRuen() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audioFlag = !audioFlag
  audio.play()
  if (wordRusLowerNumberStatus) {
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].textContent = wordEngLowerNumber[i]
    }
    wordRusLowerNumberStatus = false
    wordEngLowerNumberStatus = true
    localStorage.setItem('lang', 'en')
  } else if (wordEngLowerNumberStatus) {
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].textContent = wordRusLowerNumber[i]
    }
    wordEngLowerNumberStatus = false
    wordRusLowerNumberStatus = true
    localStorage.setItem('lang', 'ru')
  } else if (wordRusUpperNumberStatus) {
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].textContent = wordEngUpperNumber[i]
    }
    wordRusUpperNumberStatus = false
    wordEngUpperNumberStatus = true
    localStorage.setItem('lang', 'en')
  } else if (wordEngUpperNumberStatus) {
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].textContent = wordRusUpperNumber[i]
    }
    wordEngUpperNumberStatus = false
    wordRusUpperNumberStatus = true
    localStorage.setItem('lang', 'ru')
  }
  display.focus()
}

/*.........................................................backspace.................................................*/

let backspaceBtn = document.querySelector('.backspace')

backspaceBtn.addEventListener('click', pressBackspace)

function pressBackspace() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audioB.play()
  if (display.value !== '' && pointerPositionEnd !== 0) {
    if (pointerPositionStart === pointerPositionEnd) {
      textStart = textStart.slice(0, textStart.length - 1)
      display.value = textStart + textEnd
      display.selectionStart = --pointerPositionStart
      display.selectionEnd = --pointerPositionEnd
      textStart = display.value.slice(0, pointerPositionStart)
      textEnd = display.value.slice(pointerPositionEnd, display.value.length)
    } else {
      display.value = textStart + textEnd
      display.selectionStart = pointerPositionStart
      display.selectionEnd = pointerPositionStart
      pointerPositionEnd = pointerPositionStart
      textStart = display.value.slice(0, pointerPositionStart)
      textEnd = display.value.slice(pointerPositionEnd, display.value.length)
    }
  }
  display.focus()
}

/*.........................................................delete.................................................*/

let deleteBtn = document.querySelector('.delete')

deleteBtn.addEventListener('click', pressDelete)

function pressDelete() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audio.play()
  display.focus()
  if (pointerPositionStart === pointerPositionEnd) {
    textEnd = textEnd.slice(1, display.value.length)
    display.value = textStart + textEnd
    display.selectionStart = pointerPositionStart
    display.selectionEnd = pointerPositionEnd
    textStart = display.value.slice(0, pointerPositionStart)
    textEnd = display.value.slice(pointerPositionEnd, display.value.length)
  } else {
    display.value = textStart + textEnd
    display.selectionStart = pointerPositionStart
    display.selectionEnd = pointerPositionStart
    pointerPositionEnd = pointerPositionStart
    textStart = display.value.slice(0, pointerPositionStart)
    textEnd = display.value.slice(pointerPositionEnd, display.value.length)
  }
}

/*.........................................................arrows.................................................*/

let leftbtnBtn = document.querySelector('.leftbtn')
let rightbtnBtn = document.querySelector('.rightbtn')

leftbtnBtn.addEventListener('click', pressLeft)
rightbtnBtn.addEventListener('click', pressRight)

function pressLeft() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audio.play()
  display.focus()
  if (display.selectionEnd !== 0) {
    if (pointerPositionStart === pointerPositionEnd) {
      display.selectionStart = --pointerPositionStart
      display.selectionEnd = --pointerPositionEnd
      textStart = display.value.slice(0, pointerPositionStart)
      textEnd = display.value.slice(pointerPositionEnd, display.value.length)
    } else {
      display.selectionStart = pointerPositionStart
      display.selectionEnd = pointerPositionStart
      pointerPositionEnd = pointerPositionStart
      textStart = display.value.slice(0, pointerPositionStart)
      textEnd = display.value.slice(pointerPositionEnd, display.value.length)
    }
  }
}

function pressRight() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audio.play()
  display.focus()
  if (display.selectionStart !== display.value.length) {
    if (pointerPositionStart === pointerPositionEnd) {
      display.selectionStart = ++pointerPositionStart
      display.selectionEnd = ++pointerPositionEnd
      textStart = display.value.slice(0, pointerPositionStart)
      textEnd = display.value.slice(pointerPositionEnd, display.value.length)
    } else {
      display.selectionStart = pointerPositionEnd
      display.selectionEnd = pointerPositionEnd
      pointerPositionStart = pointerPositionEnd
      textStart = display.value.slice(0, pointerPositionStart)
      textEnd = display.value.slice(pointerPositionEnd, display.value.length)
    }
  }
}

/*.........................................................enter.................................................*/

let enterBtn = document.querySelector('.enter')

enterBtn.addEventListener('click', pressEnter)

function pressEnter() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audioE.play()
  display.focus()
  if (pointerPositionStart === pointerPositionEnd) {
    textStart += '\n'
    display.value = textStart + textEnd
    display.selectionStart = ++pointerPositionStart
    display.selectionEnd = ++pointerPositionEnd
    textStart = display.value.slice(0, pointerPositionStart)
    textEnd = display.value.slice(pointerPositionEnd, display.value.length)
  } else {
    textStart += '\n'
    display.value = textStart + textEnd
    display.selectionStart = ++pointerPositionStart
    display.selectionEnd = pointerPositionStart
    pointerPositionEnd = pointerPositionStart
    textStart = display.value.slice(0, pointerPositionStart)
    textEnd = display.value.slice(pointerPositionEnd, display.value.length)
  }
}

/*.........................................................tab.................................................*/

let tabBtn = document.querySelector('.tab')

tabBtn.addEventListener('click', pressTab)

function pressTab() {
  pressDisplay()
  if (isShiftActive) {
    pressShift()
  }
  audio.play()
  display.focus()
  textStart += '\t'
  display.value = textStart + textEnd
  display.selectionStart = ++pointerPositionStart
  display.selectionEnd = pointerPositionStart
  pointerPositionEnd = pointerPositionStart
  textStart = display.value.slice(0, pointerPositionStart)
  textEnd = display.value.slice(pointerPositionEnd, display.value.length)
}

/*.........................................................keyboard.................................................*/

let activeArr = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'null',
  'AltLeft',
  'Space',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
]

document.addEventListener('keydown', function (event) {
  audioen.play()
  for (let i = 0; i < activeArr.length; i++) {
    if (activeArr[i] === event.code) {
      active[i].classList.add('meaning_active')
    }
  }
})

document.addEventListener('keyup', function (event) {
  for (let i = 0; i < activeArr.length; i++) {
    if (activeArr[i] === event.code) {
      active[i].classList.remove('meaning_active')
    }
  }
})
