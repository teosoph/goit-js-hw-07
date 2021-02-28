'use strict';

// Task 4

//todo Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//todo Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//todo Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//todo Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Solution
const currentValueRef = document.getElementById('value');
let counterValue = Number(currentValueRef.textContent);

const counterRefs = {
  decreaseBtn: document.querySelector('[data-action="decrement"]'),
  valueSpan: document.querySelector('#value'),
  increaseBtn: document.querySelector('[data-action="increment"]'),
};

function decrementValue() {
  counterValue -= 1;
  renewalValue();
}
function renewalValue() {
  counterRefs.valueSpan.textContent = counterValue;
}
function incrementValue() {
  counterValue += 1;
  renewalValue();
}

counterRefs.decreaseBtn.addEventListener('click', decrementValue);
counterRefs.increaseBtn.addEventListener('click', incrementValue);
