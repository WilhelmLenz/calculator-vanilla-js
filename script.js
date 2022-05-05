'use strict';

var inputArr = [];
inputArr = document

document.getElementById('close').addEventListener('click', closeCalculator)
document.getElementById('minimize').addEventListener('click', minimizeCalculator)
document.getElementById('zoom-in').addEventListener('click', zoomInCalculator)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('change-minus-plus').addEventListener('click', changeMinusPlus)
document.getElementById('percent').addEventListener('click', percent)
document.getElementById('divide').addEventListener('click', divide)
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
document.getElementById('multiply').addEventListener('click', multiply)
document.getElementById('minus').addEventListener('click', minus)
document.getElementById('plus').addEventListener('click', plus)
document.getElementById('equal').addEventListener('click', equal)

function closeCalculator() {
    document.querySelector(".outside-border").style.visibility = "hidden"
    document.getElementById('current-button').style.visibility = "visible";
    openCalculator();
}

function openCalculator() {
    document.getElementById('current-button').addEventListener('click', function() {
        document.querySelector('.outside-border').style.visibility = "visible";
        document.getElementById('current-button').style.visibility = "hidden";
    })
}

function minimizeCalculator() {
    document.querySelector(".outside-border").style.visibility = "hidden"
    document.getElementById('maximize-calc').style.visibility = "visible";
    maximizeCalculator();
}

function maximizeCalculator() {
    document.getElementById('maximize-calc').addEventListener('click', function() {
        document.querySelector('.outside-border').style.visibility = "visible";
        document.getElementById('maximize-calc').style.visibility = "hidden";
    })
}

function zoomInCalculator() {
    console.log('9');
}

function clear() {
    document.querySelector('.number-input').value = '';
}


function changeMinusPlus() {
    if (document.getElementById('number-input').value !== '0') {
        console.log('minusPlus');
    } else {
        
    }
}

function percent() {
    if (document.getElementById('number-input').value !== '0') {
        console.log('percent');
    } else {
        
    }
}



function divide() {
    console.log('divide');
}
function multiply() {
    console.log('multiply');
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



function numberNine() {
    document.getElementById('number-input').value = '';
    document.getElementById('number-input').value = document.getElementById('number-input').value + document.getElementById('nine').textContent; 
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



