// button-switcher-7

const popup7 = document.querySelector('.popup7');
const open7 = document.querySelector('.open7');
popup7.style.display = 'none';

// switchBtn-7
const btnRef7 = document.querySelector('.button-switcher-7');
const switchFn7 = function () {
  if (popup7.style.display == 'none') popup7.style.display = 'block';
  else popup7.style.display = 'none';

  // switchBtn-7___change-text
  if (btnRef7.innerHTML == 'Show') {
    btnRef7.innerHTML = 'Hide';
  } else {
    btnRef7.innerHTML = 'Show';
  }
};
btnRef7.addEventListener('click', switchFn7);
