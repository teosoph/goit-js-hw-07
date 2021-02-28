// button-switcher-8

const popup8 = document.querySelector('.popup8');
const open8 = document.querySelector('.open8');
popup8.style.display = 'none';

// switchBtn-8
const btnRef8 = document.querySelector('.button-switcher-8');
const switchFn8 = function () {
  if (popup8.style.display == 'none') popup8.style.display = 'block';
  else popup8.style.display = 'none';

  // switchBtn-8___change-text
  if (btnRef8.innerHTML == 'Show') {
    btnRef8.innerHTML = 'Hide';
  } else {
    btnRef8.innerHTML = 'Show';
  }
};
btnRef8.addEventListener('click', switchFn8);
