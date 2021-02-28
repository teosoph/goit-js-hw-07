'use strict';

// Task 1

// В HTML есть список категорий ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Животные</h2>

//     <ul>
//       <li>Кот</li>
//       <li>Хомяк</li>
//       <li>Лошадь</li>
//       <li>Попугай</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Продукты</h2>

//     <ul>
//       <li>Хлеб</li>
//       <li>Петрушка</li>
//       <li>Творог</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Технологии</h2>

//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node</li>
//     </ul>
//   </li>
// </ul>

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const ulCategories = document.querySelector('#categories');
// console.log(ulCategories);

const categoriesItem = ulCategories.querySelectorAll('.item');
// console.log(categoriesItem);
console.log(`В списке ${categoriesItem.length} категории.`);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// Вариант 1
categoriesItem.forEach(item => {
  const title = item.firstElementChild.textContent;
  const elementsCount = item.querySelectorAll('li').length;

  console.log(`
  Категория: ${title}
  Количество элементов: ${elementsCount}
  `);
});

// Вариант 2
// for (const item of categoriesItem) {
//   const title = item.firstElementChild.textContent;
//   const elementsCount = item.querySelectorAll('li').length;

//   console.log(
//     `
//   Категория: ${title}
//   Количество элементов: ${elementsCount}
//   `,
//   );
// }
