'use strict';

// Task 7

// Напиши скрипт, который реагирует на изменение значения input#font-size-control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeInputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function inputEvent(event) {
  let currentValueRange = Number(event.target.value) / 3;
  spanRef.style.fontSize = `${currentValueRange}px`;
}

rangeInputRef.addEventListener('input', inputEvent);
