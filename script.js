'use strict';

console.log('Hallo meine lieben');

document.getElementById('close').addEventListener('click', closeCalculator)
document.getElementById('minimize').addEventListener('click', zoomInCalculator)
document.getElementById('zoom-in').addEventListener('click', minimizeCalculator)
document.getElementById('ac').addEventListener('click', ac)
document.getElementById('change-minus-plus').addEventListener('click', changeMinusPlus)
document.getElementById('percent').addEventListener('click', percent)
document.getElementById('division').addEventListener('click', devision)
document.getElementById('nine').addEventListener('click', numberNine)
document.getElementById('eight').addEventListener('click', numberEight)
document.getElementById('seven').addEventListener('click', numberSeven)
document.getElementById('six').addEventListener('click', numberSix)
document.getElementById('five').addEventListener('click', numberFive)
document.getElementById('four').addEventListener('click', numberFour)
document.getElementById('three').addEventListener('click', numberThree )
document.getElementById('two').addEventListener('click', numberTwo)
document.getElementById('one').addEventListener('click', numberOne)
document.getElementById('zero').addEventListener('click', numberZero)
document.getElementById('comma').addEventListener('click', comma)
document.getElementById('multiplication').addEventListener('click', multiplication)
document.getElementById('minus').addEventListener('click', minus)
document.getElementById('plus').addEventListener('click', plus)
document.getElementById('equal').addEventListener('click', equal)

function closeCalculator() {
    document.querySelector(".outside-border").style.visibility = "hidden"
    const newButton = document.createElement('button');
    newButton.setAttribute('id', 'calc-open-close');
    newButton.textContent = 'Open Calculator';
    const currentButton = document.getElementById('currentButton');
    currentButton.appendChild(newButton);
    document.getElementById('calc-open-close').style.visibility = "visible";
    openCalculator();
}

function openCalculator() {
    document.getElementById('calc-open-close').addEventListener('click', function() {
        document.querySelector('.outside-border').style.visibility = "visible";
        document.getElementById('calc-open-close').style.visibility = "hidden";
    })
}



function zoomInCalculator() {
    console.log('Zoom-in');
}
function minimizeCalculator() {
    console.log('minimize');
}
function numberNine() {
    console.log('9');
}
function numberEight() {
    console.log('8');
}
function numberSeven() {
    console.log('7');
}
function numberSix() {
    console.log('6');
}
function numberFive() {
    console.log('5');
}
function numberFour() {
    console.log('4');
}
function numberThree() {
    console.log('3');
}
function numberTwo() {
    console.log('2');
}
function numberOne() {
    console.log('1');
}
function numberZero() {
    console.log('0');
}


function ac() {
    console.log('ac');
}
function changeMinusPlus() {
    console.log('change minus plus');
}
function percent() {
    console.log('percent');
}
function devision() {
    console.log('devision');
}
function multiplication() {
    console.log('multiplication');
}
function plus() {
    console.log('plus');
}
function minus() {
    console.log('minus');
}
function equal() {
    console.log('equal');
}
function comma() {
    console.log('comma');
}
