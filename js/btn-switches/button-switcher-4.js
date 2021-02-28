// button-switcher-4

const popup4 = document.querySelector('.popup4');
const open4 = document.querySelector('.open4');
popup4.style.display = 'none';

// switchBtn-4
const btnRef4 = document.querySelector('.button-switcher-4');
const switchFn4 = function () {
  if (popup4.style.display == 'none') popup4.style.display = 'block';
  else popup4.style.display = 'none';

  // switchBtn-4___change-text
  if (btnRef4.innerHTML == 'Show') {
    btnRef4.innerHTML = 'Hide';
  } else {
    btnRef4.innerHTML = 'Show';
  }
};
btnRef4.addEventListener('click', switchFn4);
