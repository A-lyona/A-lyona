const piano = document.querySelector('.piano');
const D = document.querySelector('.D');
const F = document.querySelector('.F');
const G = document.querySelector('.G');
const H = document.querySelector('.H');
const J = document.querySelector('.J');
const K = document.querySelector('.K');
const L = document.querySelector('.L');
const R = document.querySelector('.R');
const T = document.querySelector('.T');
const U = document.querySelector('.U');
const I = document.querySelector('.I');
const O = document.querySelector('.O');
const keys = document.querySelectorAll('.piano-key');
const container = document.querySelector('.btn-container');
const but = document.querySelectorAll('.btn');
const fullscreen = document.querySelector('.fullscreen');
let isMousedown = false;

const sounds = {
    a: new Audio('audio/a.mp3'),
    a1: new Audio('audio/a♯.mp3'),
    b: new Audio('audio/b.mp3'),
    c: new Audio('audio/c.mp3'),
    c1: new Audio('audio/c♯.mp3'),
    d: new Audio('audio/d.mp3'),
    d1: new Audio('audio/d♯.mp3'),
    e: new Audio('audio/e.mp3'),
    f: new Audio('audio/f.mp3'),
    f1: new Audio('audio/f♯.mp3'),
    g: new Audio('audio/g.mp3'),
    g1: new Audio('audio/g♯.mp3')
}

container.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-notes')) {
      keys.forEach((el) => el.classList.remove('letter'));
      but[1].classList.remove('btn-active');
      but[0].classList.add('btn-active');
    } else if (event.target.classList.contains('btn-letters')) {
      keys.forEach((el) => el.classList.add('letter'));
      but[0].classList.remove('btn-active');
      but[1].classList.add('btn-active');
    }
});

fullscreen.addEventListener('click', (event) => {
    if (!document.fullscreenElement) {
        document.body.requestFullscreen();
    } else {
        document.exitFullscreen();
    };
});

window.addEventListener('mousedown', (event) => {
    isMousedown = true;
});

window.addEventListener('mouseup', (event) => {
    isMousedown = false;
});

D.addEventListener('mousedown', (event) => {
    D.style.transform = 'scale(0.80)';
    D.style.background = '#c0401f';
    sounds.c.currentTime = 0;
    sounds.c.play();
});

D.addEventListener('mouseup', (event) => {
    D.style.transform = 'scale(1)';
    D.style.background = '#c7c2c2';
});

D.addEventListener('mouseover', (event) => {
    D.style.background = '#c79f95';
    if (isMousedown === true) {
        D.style.transform = 'scale(0.80)';
        D.style.background = '#c0401f';
        sounds.c.currentTime = 0;
        sounds.c.play(); 
    }
});

D.addEventListener('mouseout', (event) => {
    D.style.transform = 'scale(1)';
    D.style.background = '#c7c2c2';
});

F.addEventListener('mousedown', (event) => {
    F.style.transform = 'scale(0.80)';
    F.style.background = '#c0401f';
    sounds.d.currentTime = 0;
    sounds.d.play();
});

F.addEventListener('mouseup', (event) => {
    F.style.transform = 'scale(1)';
    F.style.background = '#c7c2c2';
});

F.addEventListener('mouseover', (event) => {
    F.style.background = '#c79f95';
    if (isMousedown === true) {
        F.style.transform = 'scale(0.80)';
        F.style.background = '#c0401f';
        sounds.d.currentTime = 0;
        sounds.d.play(); 
    }
});

F.addEventListener('mouseout', (event) => {
    F.style.transform = 'scale(1)';
    F.style.background = '#c7c2c2';
});

G.addEventListener('mousedown', (event) => {
    G.style.transform = 'scale(0.80)';
    G.style.background = '#c0401f';
    sounds.e.currentTime = 0;
    sounds.e.play();
});

G.addEventListener('mouseup', (event) => {
    G.style.transform = 'scale(1)';
    G.style.background = '#c7c2c2';
});

G.addEventListener('mouseover', (event) => {
    G.style.background = '#c79f95';
    if (isMousedown === true) {
        G.style.transform = 'scale(0.80)';
        G.style.background = '#c0401f';
        sounds.e.currentTime = 0;
        sounds.e.play(); 
    }
});

G.addEventListener('mouseout', (event) => {
    G.style.transform = 'scale(1)';
    G.style.background = '#c7c2c2';
});

H.addEventListener('mousedown', (event) => {
    H.style.transform = 'scale(0.80)';
    H.style.background = '#c0401f';
    sounds.f.currentTime = 0;
    sounds.f.play();
});

H.addEventListener('mouseup', (event) => {
    H.style.transform = 'scale(1)';
    H.style.background = '#c7c2c2';
});

H.addEventListener('mouseover', (event) => {
    H.style.background = '#c79f95';
    if (isMousedown === true) {
        H.style.transform = 'scale(0.80)';
        H.style.background = '#c0401f';
        sounds.f.currentTime = 0;
        sounds.f.play(); 
    }
});

H.addEventListener('mouseout', (event) => {
    H.style.transform = 'scale(1)';
    H.style.background = '#c7c2c2';
});

J.addEventListener('mousedown', (event) => {
    J.style.transform = 'scale(0.80)';
    J.style.background = '#c0401f';
    sounds.g.currentTime = 0;
    sounds.g.play();
});

J.addEventListener('mouseup', (event) => {
    J.style.transform = 'scale(1)';
    J.style.background = '#c7c2c2';
});

J.addEventListener('mouseover', (event) => {
    J.style.background = '#c79f95';
    if (isMousedown === true) {
        J.style.transform = 'scale(0.80)';
        J.style.background = '#c0401f';
        sounds.g.currentTime = 0;
        sounds.g.play(); 
    }
});

J.addEventListener('mouseout', (event) => {
    J.style.transform = 'scale(1)';
    J.style.background = '#c7c2c2';
});

K.addEventListener('mousedown', (event) => {
    K.style.transform = 'scale(0.80)';
    K.style.background = '#c0401f';
    sounds.a.currentTime = 0;
    sounds.a.play();
});

K.addEventListener('mouseup', (event) => {
    K.style.transform = 'scale(1)';
    K.style.background = '#c7c2c2';
});

K.addEventListener('mouseover', (event) => {
    K.style.background = '#c79f95';
    if (isMousedown === true) {
        K.style.transform = 'scale(0.80)';
        K.style.background = '#c0401f';
        sounds.a.currentTime = 0;
        sounds.a.play(); 
    }
});

K.addEventListener('mouseout', (event) => {
    K.style.transform = 'scale(1)';
    K.style.background = '#c7c2c2';
});

L.addEventListener('mousedown', (event) => {
    L.style.transform = 'scale(0.80)';
    L.style.background = '#c0401f';
    sounds.b.currentTime = 0;
    sounds.b.play();
});

L.addEventListener('mouseup', (event) => {
    L.style.transform = 'scale(1)';
    L.style.background = '#c7c2c2';
});

L.addEventListener('mouseover', (event) => {
    L.style.background = '#c79f95';
    if (isMousedown === true) {
        L.style.transform = 'scale(0.80)';
        L.style.background = '#c0401f';
        sounds.b.currentTime = 0;
        sounds.b.play(); 
    }
});

L.addEventListener('mouseout', (event) => {
    L.style.transform = 'scale(1)';
    L.style.background = '#c7c2c2';
});

R.addEventListener('mousedown', (event) => {
    R.style.transform = 'scale(0.80)';
    R.style.background = 'black';
    sounds.c1.currentTime = 0;
    sounds.c1.play();
});

R.addEventListener('mouseup', (event) => {
    R.style.transform = 'scale(1)';
    R.style.background = 'black';
});

R.addEventListener('mouseover', (event) => {
    R.style.background = 'black';
    if (isMousedown === true) {
        R.style.transform = 'scale(0.80)';
        R.style.background = 'black';
        sounds.c1.currentTime = 0;
        sounds.c1.play(); 
    }
});

R.addEventListener('mouseout', (event) => {
    R.style.transform = 'scale(1)';
    R.style.background = '#313940';
});

T.addEventListener('mousedown', (event) => {
    T.style.transform = 'scale(0.80)';
    T.style.background = 'black';
    sounds.d1.currentTime = 0;
    sounds.d1.play();
});

T.addEventListener('mouseup', (event) => {
    T.style.transform = 'scale(1)';
    T.style.background = 'black';
});

T.addEventListener('mouseover', (event) => {
    T.style.background = 'black';
    if (isMousedown === true) {
        T.style.transform = 'scale(0.80)';
        T.style.background = 'black';
        sounds.d1.currentTime = 0;
        sounds.d1.play(); 
    }
});

T.addEventListener('mouseout', (event) => {
    T.style.transform = 'scale(1)';
    T.style.background = '#313940';
});

U.addEventListener('mousedown', (event) => {
    U.style.transform = 'scale(0.80)';
    U.style.background = 'black';
    sounds.f1.currentTime = 0;
    sounds.f1.play();
});

U.addEventListener('mouseup', (event) => {
    U.style.transform = 'scale(1)';
    U.style.background = 'black';
});

U.addEventListener('mouseover', (event) => {
    U.style.background = 'black';
    if (isMousedown === true) {
        U.style.transform = 'scale(0.80)';
        U.style.background = 'black';
        sounds.f1.currentTime = 0;
        sounds.f1.play(); 
    }
});

U.addEventListener('mouseout', (event) => {
    U.style.transform = 'scale(1)';
    U.style.background = '#313940';
});

I.addEventListener('mousedown', (event) => {
    I.style.transform = 'scale(0.80)';
    I.style.background = 'black';
    sounds.g1.currentTime = 0;
    sounds.g1.play();
});

I.addEventListener('mouseup', (event) => {
    I.style.transform = 'scale(1)';
    I.style.background = 'black';
});

I.addEventListener('mouseover', (event) => {
    I.style.background = 'black';
    if (isMousedown === true) {
        I.style.transform = 'scale(0.80)';
        I.style.background = 'black';
        sounds.g1.currentTime = 0;
        sounds.g1.play(); 
    }
});

I.addEventListener('mouseout', (event) => {
    I.style.transform = 'scale(1)';
    I.style.background = '#313940';
});

O.addEventListener('mousedown', (event) => {
    O.style.transform = 'scale(0.80)';
    O.style.background = 'black';
    sounds.a1.currentTime = 0;
    sounds.a1.play();
});

O.addEventListener('mouseup', (event) => {
    O.style.transform = 'scale(1)';
    O.style.background = 'black';
});

O.addEventListener('mouseover', (event) => {
    O.style.background = 'black';
    if (isMousedown === true) {
        O.style.transform = 'scale(0.80)';
        O.style.background = 'black';
        sounds.a1.currentTime = 0;
        sounds.a1.play(); 
    }
});

O.addEventListener('mouseout', (event) => {
    O.style.transform = 'scale(1)';
    O.style.background = '#313940';
});

window.addEventListener('keydown', (event) => {
    if(event.code === 'KeyD') {
        sounds.c.currentTime = 0;
        sounds.c.play();
        D.style.transform = 'scale(0.80)';
        D.style.background = '#c0401f';
    }
    else if (event.code === 'KeyF') {
        F.style.transform = 'scale(0.80)';
        F.style.background = '#c0401f';
        sounds.d.currentTime = 0;
        sounds.d.play();
    }
    else if (event.code === 'KeyG') {
        G.style.transform = 'scale(0.80)';
        G.style.background = '#c0401f';
        sounds.e.currentTime = 0;
        sounds.e.play();
    }
    else if (event.code === 'KeyH') {
        H.style.transform = 'scale(0.80)';
        H.style.background = '#c0401f';
        sounds.f.currentTime = 0;
        sounds.f.play();
    }
    else if (event.code === 'KeyJ') {
        J.style.transform = 'scale(0.80)';
        J.style.background = '#c0401f';
        sounds.g.currentTime = 0;
        sounds.g.play();
    }
    else if (event.code === 'KeyK') {
        K.style.transform = 'scale(0.80)';
        K.style.background = '#c0401f';
        sounds.a.currentTime = 0;
        sounds.a.play();
    }
    else if (event.code === 'KeyL') {
        L.style.transform = 'scale(0.80)';
        L.style.background = '#c0401f';
        sounds.b.currentTime = 0;
        sounds.b.play();
    }
    else if (event.code === 'KeyR') {
        R.style.transform = 'scale(0.80)';
        R.style.background = 'black';
        sounds.c1.currentTime = 0;
        sounds.c1.play();
    }
    else if (event.code === 'KeyT') {
        T.style.transform = 'scale(0.80)';
        T.style.background = 'black';
        sounds.d1.currentTime = 0;
        sounds.d1.play();    
    }
    else if (event.code === 'KeyU') {
        U.style.transform = 'scale(0.80)';
        U.style.background = 'black';
        sounds.f1.currentTime = 0;
        sounds.f1.play();    
    }
    else if (event.code === 'KeyI') {
        I.style.transform = 'scale(0.80)';
        I.style.background = 'black';
        sounds.g1.currentTime = 0;
        sounds.g1.play();   
    }
    else if (event.code === 'KeyO') {
        O.style.transform = 'scale(0.80)';
        O.style.background = 'black';
        sounds.a1.currentTime = 0;
        sounds.a1.play();   
    }
});

window.addEventListener('keyup', (event) => {
    D.style.transform = 'scale(1)';
    D.style.background = '#c7c2c2';    
    F.style.transform = 'scale(1)';
    F.style.background = '#c7c2c2';
    G.style.transform = 'scale(1)';
    G.style.background = '#c7c2c2';
    H.style.transform = 'scale(1)';
    H.style.background = '#c7c2c2';
    J.style.transform = 'scale(1)';
    J.style.background = '#c7c2c2';
    K.style.transform = 'scale(1)';
    K.style.background = '#c7c2c2';
    L.style.transform = 'scale(1)';
    L.style.background = '#c7c2c2';
    R.style.transform = 'scale(1)';
    R.style.background = '#313940';
    T.style.transform = 'scale(1)';
    T.style.background = '#313940';
    U.style.transform = 'scale(1)';
    U.style.background = '#313940';
    I.style.transform = 'scale(1)';
    I.style.background = '#313940';
    O.style.transform = 'scale(1)';
    O.style.background = '#313940';
});

