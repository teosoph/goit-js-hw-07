'use strict';

// Task 8

// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div,
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');
const btnRef = document.querySelectorAll('#controls button');

const colorGen = () => {
  const [r, g, b] = [0, 1, 2].map(() => {
    return Math.random() * 256;
  });
  return `rgb(${r},${g},${b})`;
};

const boxGen = sequentNum => {
  const box = document.createElement('div');
  box.style.width = `${30 + 10 * sequentNum}px`;
  box.style.height = `${30 + 10 * sequentNum}px`;
  box.style.backgroundColor = colorGen();
  return box;
};

const createBoxes = amount => {
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    boxesArr.push(boxGen(i));
  }
  boxesRef.append(...boxesArr);
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

const render = () => {
  if (boxesRef.childElementCount) {
    destroyBoxes();
  }
  const amount = inputRef.value;
  createBoxes(amount);
};

btnRef.forEach(button => {
  const action = button.dataset.action;
  button.addEventListener('click', { render, destroy: destroyBoxes }[action]);
});
