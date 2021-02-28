'use strict';

// Task 2

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ulIngredients = document.querySelector('#ingredients');

const newUlRefs = ingredients.map(ingredient => {
  const newUlItem = document.createElement('li');
  newUlItem.textContent = ingredient;
  return newUlItem;
});

ulIngredients.append(...newUlRefs);
