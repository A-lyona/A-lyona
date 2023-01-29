/*..........................................................аудиоплеер.................................................*/

let buttonClick = document.querySelector('.button_player');
let playPrev = document.querySelector('.moment_play_prev');
let playNext = document.querySelector('.moment_play_next');
let playItem = document.querySelectorAll('.moment_play_item');
let nowSounds = 0;
let sounds = [new Audio('assets/sounds/Waiting for You.mp3'), new Audio('assets/sounds/Remembrance.mp3'), new Audio('assets/sounds/Just for You.mp3'), new Audio('assets/sounds/Autumn Rose.mp3')];

buttonClick.addEventListener('click', function() {
  if (buttonClick.classList.contains('moment_play')) {
    buttonClick.classList.remove('moment_play');
    buttonClick.classList.add('moment_pause');
    sounds[nowSounds].currentTime = 0;
    sounds[nowSounds].play();
  } else {
    buttonClick.classList.remove('moment_pause');
    buttonClick.classList.add('moment_play');
    sounds[nowSounds].pause();
  }
});

playNext.addEventListener('click', function() {
  sounds[nowSounds].pause();
  if (nowSounds === 3) {
    nowSounds = 0;
  } else {
    nowSounds++;
  };
  sounds[nowSounds].currentTime = 0;
  sounds[nowSounds].play();
  buttonClick.classList.remove('moment_play');
  buttonClick.classList.add('moment_pause');

});

playPrev.addEventListener('click', function() {
  sounds[nowSounds].pause();
  if (nowSounds === 0) {
    nowSounds = 3;
  } else {
    nowSounds--;
  };
  sounds[nowSounds].currentTime = 0;
  sounds[nowSounds].play();
  buttonClick.classList.remove('moment_play');
  buttonClick.classList.add('moment_pause');
});

for (let e of sounds) {
	e.addEventListener('ended', function() {
		playNext.click();
	});
}

/*..........................................................игра.................................................*/

let gameFill = document.querySelectorAll('.game_fill');
let counterResults = document.querySelectorAll('.counter_results');
let gameChipsCounter = document.querySelector('.game_chips_counter');
let gameChipsWrapper = document.querySelector('.game_chips_wrapper');
let counter = document.querySelector('.counter');
let winButtonN = document.querySelector('.win_button_n');
let winButtonO = document.querySelector('.win_button_o');
let winButtonX = document.querySelector('.win_button_x');
let gameX = document.querySelector('.game_chips_x');
let gameO = document.querySelector('.game_chips_o');
let gameWinN = document.querySelector('.game_win_wrapper_n');
let gameWinO = document.querySelector('.game_win_wrapper_o');
let gameWinX = document.querySelector('.game_win_wrapper_x');
let isFlagGame; 
let countDiv = '012345678';
let crossOrZerro = 0;
let arrCross = ['012', '345', '678', '036', '147', '258', '048', '246'];
let arrZero = ['012', '345', '678', '036', '147', '258', '048', '246'];
let lastChips;

gameX.addEventListener('click', function() {  // стартовый выбор крестик
  crossOrZerro = 1;
	isFlagGame = true;
	gameChipsWrapper.style.display = 'none';
	gameChipsCounter.style.display = 'flex';
	clickGame();
});

gameO.addEventListener('click', function() { // стартовый выбор нолик
  crossOrZerro = 2;
	isFlagGame = true;
	gameChipsWrapper.style.display = 'none';
	gameChipsCounter.style.display = 'flex';
	clickGame2();
  moveComp()
});

function clickGame() { // мы играем за крестик
	for (let i = 0; i < gameFill.length; i++) { // перебор по ячейкам игрового поля
		gameFill[i].addEventListener('click', function() { //клик по нужной ячейке 
			if (!gameFill[i].classList.contains('test') && crossOrZerro === 1) { // test - класс, который указывает что ячейка занята
				if (isFlagGame) {
					gameFill[i].style.backgroundImage = 'url("assets/x.png")';
					gameFill[i].classList.add('test');
					isFlagGame = false;
          countDiv = countDiv.replace(i, '');
          new Audio('assets/sounds/clickX.mp3').play();
          for (let k = 0; k < arrCross.length; k++) {
            arrCross[k] = arrCross[k].replace(i, '');
            if (arrCross[k].length === 0) {
              lastChips = 1;
            }
          }
				}
				else {
					gameFill[i].style.backgroundImage = 'url("assets/o.png")';
					gameFill[i].classList.add('test');
					isFlagGame = true;
          for (let k = 0; k < arrZero.length; k++) {
            arrZero[k] = arrZero[k].replace(i, '');
            if (arrZero[k].length === 0) {
              if(lastChips!==1) {
                lastChips = 2;
              }
            }
          }
				}
				counter.textContent = '\u00A0' + (Number(counter.textContent) + 1); // выводим количество ходов и записываем в counter
        if (isFlagGame === false) {
          moveComp();
        }
			}
      if (lastChips === 1) {
        gameWinX.style.display = 'flex';
      } 
      else if (lastChips === 2) {
        gameWinO.style.display = 'flex';
      } 
      else if (counter.textContent === '\u00A0' + 9) {
        gameWinN.style.display = 'flex';
      }
		});
	};
}

function moveComp() {
  if (countDiv.length > 0) {
    gameFill[countDiv[0]].click();
    countDiv = countDiv.slice(1);
  }
}

function clickGame2() { // мы играем за нолик
	for (let i = 0; i < gameFill.length; i++) { // перебор по ячейкам игрового поля
		gameFill[i].addEventListener('click', function() { //клик по нужной ячейке 
			if (!gameFill[i].classList.contains('test') && crossOrZerro === 2) { // test - класс, который указывает что ячейка занята
				if (isFlagGame) {
					gameFill[i].style.backgroundImage = 'url("assets/x.png")';
					gameFill[i].classList.add('test');
					isFlagGame = false;
          for (let k = 0; k < arrCross.length; k++) {
            arrCross[k] = arrCross[k].replace(i, '');
            if (arrCross[k].length === 0) {
              lastChips = 1;
            }
          }
				}
				else {
					gameFill[i].style.backgroundImage = 'url("assets/o.png")';
					gameFill[i].classList.add('test');
					isFlagGame = true;
          countDiv = countDiv.replace(i, '');
          new Audio('assets/sounds/clickO.mp3').play();
          for (let k = 0; k < arrZero.length; k++) {
            arrZero[k] = arrZero[k].replace(i, '');
            if (arrZero[k].length === 0) {
              if(lastChips!==1) {
                lastChips = 2;
                isFlagGame = false
              }
            }
          }
				}
				counter.textContent = '\u00A0' + (Number(counter.textContent) + 1); // выводим количество ходов и записываем в counter
        if (isFlagGame === true) {
          moveComp();
        }
			}
      if (lastChips === 2) {
        gameWinO.style.display = 'flex';
      } 
      else if (lastChips === 1) {
        gameWinX.style.display = 'flex';
      } 
      else if (counter.textContent === '\u00A0' + 9) {
         gameWinN.style.display = 'flex';
      }
		});
	};
}

winButtonN.addEventListener('click', function() { 
  workLocalStorage();
  localStorage.setItem('name0', `Moves:${'\u00A0' + Math.ceil(Number(counter.textContent) / 2 - 0.5)}. Draw!`);
  qwerty();
  gameWinN.style.display = 'none';
  for (let pol of gameFill ) {
    pol.style.backgroundImage = '';
    pol.classList.remove('test');
  }
	gameChipsWrapper.style.display = 'flex';
	gameChipsCounter.style.display = 'none';
  counter.textContent = '\u00A0' + 0;
  countDiv = '012345678';
  crossOrZerro = 0;
});

winButtonX.addEventListener('click', function() { 
  workLocalStorage();
  localStorage.setItem('name0', `Moves:${'\u00A0' + Math.ceil(Number(counter.textContent) / 2)}. Winner X.`);
  qwerty();
  gameWinX.style.display = 'none';
  for (let pol of gameFill ) {
    pol.style.backgroundImage = '';
    pol.classList.remove('test');
  }
	gameChipsWrapper.style.display = 'flex';
	gameChipsCounter.style.display = 'none';
  counter.textContent = '\u00A0' + 0;
  countDiv = '012345678';
  crossOrZerro = 0;
  lastChips = undefined
  arrCross = ['012', '345', '678', '036', '147', '258', '048', '246'];
  arrZero = ['012', '345', '678', '036', '147', '258', '048', '246'];

});

winButtonO.addEventListener('click', function() { 
  workLocalStorage();
  localStorage.setItem('name0', `Moves:${'\u00A0' + Math.ceil(Number(counter.textContent) / 2 - 0.5)}. Winner O.`);
  qwerty();
  gameWinO.style.display = 'none';
  for (let pol of gameFill ) {
    pol.style.backgroundImage = '';
    pol.classList.remove('test');
  }
	gameChipsWrapper.style.display = 'flex';
	gameChipsCounter.style.display = 'none';
  counter.textContent = '\u00A0' + 0;
  countDiv = '012345678';
  crossOrZerro = 0;
  lastChips = undefined
  arrCross = ['012', '345', '678', '036', '147', '258', '048', '246'];
  arrZero = ['012', '345', '678', '036', '147', '258', '048', '246'];
});

/*..........................................................записываем последний результат.................................................*/

function qwerty() {
  for (let i = 0; i < counterResults.length; i++) {
    //localStorage.setItem(`name${i}`, '') // обнуление локального хранилища
    counterResults[i].textContent = localStorage.getItem(`name${i}`) || '';
  }
}

qwerty();

function workLocalStorage() {
  localStorage.setItem('name9', `${localStorage.getItem('name8')}`); 
  localStorage.setItem('name8', `${localStorage.getItem('name7')}`); 
  localStorage.setItem('name7', `${localStorage.getItem('name6')}`); 
  localStorage.setItem('name6', `${localStorage.getItem('name5')}`); 
  localStorage.setItem('name5', `${localStorage.getItem('name4')}`); 
  localStorage.setItem('name4', `${localStorage.getItem('name3')}`); 
  localStorage.setItem('name3', `${localStorage.getItem('name2')}`); 
  localStorage.setItem('name2', `${localStorage.getItem('name1')}`); 
  localStorage.setItem('name1', `${localStorage.getItem('name0')}`); 
}

/*..........................................................смена стиля.................................................*/

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
let body = document.querySelector('body');

function styleOffName() {
  one.classList.remove('cho');
  two.classList.remove('cho');
  three.classList.remove('cho');
}

one.addEventListener('click', function() {
  styleOffName();
  one.classList.add('cho');
  body.style.backgroundImage = 'url("assets/79065.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/79065.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/79065.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/79065.jpg")';
  one.style.backgroundColor = '#d16653';
  two.style.backgroundColor = '#f19281';
  three.style.backgroundColor = '#f19281';
});

two.addEventListener('click', function() {
  styleOffName();
  two.classList.add('cho');
  body.style.backgroundImage = 'url("assets/93376.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/93376.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/93376.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/93376.jpg")';
  one.style.backgroundColor = '#558d71';
  two.style.backgroundColor = '#355c48';
  three.style.backgroundColor = '#558d71';
});

three.addEventListener('click', function() {
  styleOffName();
  three.classList.add('cho');
  body.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinN.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinX.style.backgroundImage = 'url("assets/53622112.jpg")';
  gameWinO.style.backgroundImage = 'url("assets/53622112.jpg")';
  one.style.backgroundColor = '#82b1e4';
  two.style.backgroundColor = '#82b1e4';
  three.style.backgroundColor = '#4977a8';
});

console.log('Все пункты выполнены.')
console.log('При клике крестиком или ноликом разная озвучка клика.')
console.log('Дополнительный функционал выполнен в виде аудиоплеера, который находится в футере.')
