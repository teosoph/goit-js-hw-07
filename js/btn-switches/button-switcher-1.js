// button switcher

// вариант 1
// Здесь не важно, как мы скрываем текст.
// Также можно использовать style.display:
// document.getElementById('hider').onclick = function () {
//   document.getElementById('#text').hidden = true;
// };

// вариант 2
// var popup = document.querySelector('.popup');
// var open = document.querySelector('.open');
// popup.style.display = 'none';
// open.addEventListener('click', function () {
//   if (popup.style.display == 'none') popup.style.display = 'block';
//   else popup.style.display = 'none';
// });

// my variant
const popup1 = document.querySelector('.popup1');
const open1 = document.querySelector('.open1');
popup1.style.display = 'none';

// switchBtn-1
const btnRef1 = document.querySelector('.button-switcher-1');
const switchFn1 = function () {
  if (popup1.style.display == 'none') popup1.style.display = 'block';
  else popup1.style.display = 'none';

  // switchBtn-1___change-text
  if (btnRef1.innerHTML == 'Show') {
    btnRef1.innerHTML = 'Hide';
  } else {
    btnRef1.innerHTML = 'Show';
  }
};
btnRef1.addEventListener('click', switchFn1);
